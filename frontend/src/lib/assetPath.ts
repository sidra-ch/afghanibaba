export const assetPath = (path: string) => {
  // For Vercel deployment, just return the path as-is
  // Assets in /public are served from root
  return path;
};
