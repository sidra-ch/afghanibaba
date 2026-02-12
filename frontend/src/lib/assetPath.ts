const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const joinPath = (prefix: string, suffix: string) => {
  if (!prefix) {
    return suffix.startsWith("/") ? suffix : `/${suffix}`;
  }

  const normalizedPrefix = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;
  const normalizedSuffix = suffix.startsWith("/") ? suffix : `/${suffix}`;

  return `${normalizedPrefix}${normalizedSuffix}`;
};

export const assetPath = (path: string) => joinPath(basePath, path);
