import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MainHeader from "@/components/MainHeader.vue";

describe("MainHeader", () => {
  it("render MainHeader correctly", async () => {
    render(MainHeader);
    const header = await screen.findByText("My Favourite Games");
    expect(header).toBeTruthy();
    expect(header.nodeName).toBe("H1");
  });
});
