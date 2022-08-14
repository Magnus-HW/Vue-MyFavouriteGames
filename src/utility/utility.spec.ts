import { capitalizeFirstLetter, pickOutImagesFolderName } from "./utility";
import { describe, it, expect } from "vitest";

describe("caitalizeFirstLetter", () => {
  it("caitalizeFirstLetter", () => {
    const res = capitalizeFirstLetter("hello!");
    expect(res).toBe("Hello!");
    const res1 = capitalizeFirstLetter("hello world!");
    expect(res1).toBe("Hello world!");
  });
});

describe("image folder name", () => {
  it("image folder name", () => {
    const folderName1 = pickOutImagesFolderName("gameFolderName-poster.jpg");
    expect(folderName1).toBe("gameFolderName");

    const folderName2 = pickOutImagesFolderName("godofwar3-poster.jpg");
    expect(folderName2).toBe("godofwar3");
  });
});
