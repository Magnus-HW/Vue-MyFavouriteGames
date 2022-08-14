import { vi } from "vitest";
import type { IGame, IInfo } from "./types";

export const testGame1: IGame = {
  title: "TestTitle",
  poster: "testgame1-poster.jpg",
  id: 1,
  info: {
    developer: "Test Developer",
    released: "Test Released",
    genres: ["Action"],
    description: "Test Description",
    shortPlot: "Test Shortplot",
  },
  images: ["testgame-ss1.jpg", "testgame-ss2.jpg"],
};
const testGame2: IGame = {
  title: "TestTitle",
  poster: "testgame2-poster.jpg",
  id: 2,
  info: {
    developer: "Test Developer",
    released: "Test Released",
    genres: ["Action"],
    description: "Test Description",
    shortPlot: "Test Shortplot",
  },
  images: ["testgame-ss1.jpg", "testgame-ss2.jpg"],
};
vi.mock("@/api/gamesAPI", () => {
  return {
    getSourceData: vi.fn().mockResolvedValue([testGame1, testGame2]),
  };
});
