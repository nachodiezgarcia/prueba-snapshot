import { createServerFn } from "@tanstack/react-start";
import { contentIslandClient } from "@/lib/content-island";
import type { HomeSectionVm } from "./home.vm";
import { mapHomeSectiontoVm } from "./home.mapper";

export const getHomePageContent = createServerFn({ method: "GET" }).handler(
  async () => {
    const content = await contentIslandClient.getContent<HomeSectionVm>({
      contentType: "HomeSection",
      includeRelatedContent: "all",
    });
    return mapHomeSectiontoVm(content);
  },
);