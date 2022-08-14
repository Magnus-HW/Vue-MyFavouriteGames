import type { IGame } from "@/types";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function alphabeticalSort(g1: IGame, g2: IGame) {
  if (g1.title < g2.title) return -1;
  else return 1;
}

//pick out folder name from poster name, poster name contains folder name
export function pickOutImagesFolderName(str: string) {
  const foldareName = str.match(/.+?(?=-)/);
  return foldareName ? foldareName[0] : "";
}
