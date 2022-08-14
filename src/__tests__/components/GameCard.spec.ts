import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import GameCard from "@/components/GameCard.vue";

import { pickOutImagesFolderName } from "@/utility/utility";
import { testGame1 } from "@/setupTests";

import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router";

describe("GameCard", async () => {
  // mock router
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  it("render GameCard Correctly", async () => {
    render(GameCard, {
      props: {
        game: testGame1,
      },
      global: {
        plugins: [router],
      },
    });
    await router.push("/Action");
    await router.isReady();

    const gamePoster = await screen.findByAltText(testGame1.poster);
    expect(gamePoster).toBeTruthy();
  });
});
