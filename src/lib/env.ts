function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const ENV = {
  CONTENT_ISLAND_ACCESS_TOKEN: requireEnv('CONTENT_ISLAND_ACCESS_TOKEN'),
  REFRESH_SECRET: requireEnv('REFRESH_SECRET')
};
