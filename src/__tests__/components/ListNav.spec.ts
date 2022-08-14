import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import GameCard from "@/components/GameCard.vue";

import { pickOutImagesFolderName } from "@/utility/utility";
import { testGame1 } from "@/setupTests";

import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router";
import ListNav from "@/components/NavigationMenu/ListNav.vue";

describe("ListNav", async () => {
  // mock router
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  it("render GameCard Correctly", async () => {
    render(ListNav, {
      props: {
        genres: ["Action", "Racing", "RPG", "FPS"],
      },
      global: {
        plugins: [router],
      },
    });
    const linkAll = await screen.findByText("All");
    expect(linkAll.textContent).toBe("All");

    const linkAction = await screen.findByText("Action");
    expect(linkAction.textContent).toBe("Action");

    const linkRacing = await screen.findByText("Racing");
    expect(linkRacing.textContent).toBe("Racing");

    const linkRPG = await screen.findByText("RPG");
    expect(linkRPG.textContent).toBe("RPG");

    const linkFPS = await screen.findByText("FPS");
    expect(linkFPS.textContent).toBe("FPS");
  });
});
