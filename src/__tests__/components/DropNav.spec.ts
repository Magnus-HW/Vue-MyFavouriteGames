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
import DropNav from "@/components/NavigationMenu/DropNav.vue";

describe("DropNav", async () => {
  //mock router
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  //mockStore
  const user = userEvent.setup();
  it("render GameCard Correctly", async () => {
    render(DropNav, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    });

    const selectedAll = await screen.findByText("Selected All");
    expect(selectedAll.textContent).toBe(" Selected All");

    await user.click(selectedAll);
    const linkAction = await screen.findByText("Action");
    expect(linkAction.textContent).toBe("Action");

    await user.click(linkAction);
    const selectedAction = await screen.findByText("Selected Action");
    expect(selectedAction.textContent).toBe(" Selected Action");

    const hidedLink = screen.queryByText("FPS");
    expect(hidedLink).toBeFalsy();
  });
});
