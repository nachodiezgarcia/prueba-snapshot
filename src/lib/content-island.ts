import { createClient, exportSnapshot, type ContentSnapshot } from "@content-island/api-client";
import snapshot from '../../content-island-snapshot.json' with { type: 'json' }
import { ENV } from "./env";

console.log("[content-island] module loading, token present:", !!ENV.CONTENT_ISLAND_ACCESS_TOKEN);

export const contentIslandClient = createClient({
  accessToken: ENV.CONTENT_ISLAND_ACCESS_TOKEN,
  mode: "snapshot",
  snapshotLoader: async () =>
    exportSnapshot({ accessToken: ENV.CONTENT_ISLAND_ACCESS_TOKEN })
      .catch(() => snapshot as ContentSnapshot),
});