/**
 * Resolves an image stored as a JSON asset file into a string usable as
 * an <img src> or CSS background-image.
 *
 * Supported shapes:
 *  - Lovable asset pointer: { url: "/__l5e/assets-v1/..." }
 *  - Embedded data URI:     { dataUri: "data:image/png;base64,..." }
 *  - Alternate keys:        { src } / { data }
 */
export type ImageAssetJson = {
  url?: string;
  dataUri?: string;
  src?: string;
  data?: string;
  [key: string]: unknown;
};

export function loadImageAsset(asset: ImageAssetJson | string): string {
  if (typeof asset === "string") return asset;
  const value = asset.dataUri ?? asset.url ?? asset.src ?? asset.data;
  if (typeof value !== "string" || !value) {
    if (import.meta.env.DEV) console.warn("loadImageAsset: no image source found", asset);
    return "";
  }
  return value;
}

export const cssImage = (asset: ImageAssetJson | string) => `url("${loadImageAsset(asset)}")`;
