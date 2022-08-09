import type { IGame } from "@/types";

export async function getSoureseData(): Promise<IGame[]> {
  const sourceData = await import("@/data.json");
  return sourceData.games;
}
