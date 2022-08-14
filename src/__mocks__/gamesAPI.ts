import type { IInfo, IGame } from "@/types";

const gameInfo: IInfo = {
  developer: "Test Developer",
  released: "Test Released",
  genres: ["Test Genre"],
  description: "Test Description",
  shortPlot: "Test Shortplot",
};
const testGame: IGame = {
  title: "TestTitle",
  poster: "testgame-poster.jpg",
  id: 1,
  info: gameInfo,
  images: ["testgame-ss1.jpg", "testgame-ss2.jpg"],
};

export default function getSourceData(): Promise<IGame[]> {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve([testGame]);
    });
  });
}
