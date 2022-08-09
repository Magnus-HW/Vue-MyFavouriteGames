import type { IGame } from "@/types";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function alphabeticalSort(g1: IGame, g2: IGame) {
  if (g1.title < g2.title) return -1;
  else return 1;
}

export function imagesFolderName(str: string) {
  const foldareName = str.match(/.+?(?=-)/);
  return foldareName ? foldareName[0] : null;
}
