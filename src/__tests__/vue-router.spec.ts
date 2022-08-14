import { render, screen } from "@testing-library/vue";
import { describe, it, expect, beforeEach, test } from "vitest";

import App from "@/App.vue";
import userEvent from "@testing-library/user-event";

import { createRouter, createWebHistory, useRoute } from "vue-router";

import { routes } from "@/router";
import { createTestingPinia } from "@pinia/testing";
import { nextTick } from "process";
import { fireEvent, waitFor } from "@testing-library/dom";
import { link } from "fs";

describe("App router", async () => {
  //mock router
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  //mockStore
  const user = userEvent.setup();
  it("render GameCard Correctly", async () => {
    render(App, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    });
    // router.push("/Action");
    // await router.isReady();

    const menuLink = await screen.findByText("Action");
    expect(menuLink.textContent).toBe("Action");

    await user.click(menuLink);
    await waitFor(() => expect(router.currentRoute.value.path).toBe("/Action"));

    const gameLink = await screen.findByAltText("testgame1-poster.jpg");
    expect(gameLink).toBeInstanceOf(Image);

    await user.click(gameLink);
    await waitFor(() =>
      expect(router.currentRoute.value.path).toBe("/Action/1/TestTitle")
    );
    const gameTitle = await screen.findByText("TestTitle");
    expect(gameTitle.textContent).toBe("Title: TestTitle");
  });
});

//const store = useGamesStore();
// global: {
//   plugins: [router, createTestingPinia({ stubActions: false })],
// },
