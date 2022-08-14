import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import { getSourceData } from "@/api/gamesAPI";

describe("getSourceData", () => {
  it("get games data", async () => {
    const games = await getSourceData();
    expect(games[0].title).toEqual("TestTitle");
  });
});
