import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/svelte";

import Subtitle from "./subtitle.test.svelte";

test("Subtitle to the left", {},  () => {
    render(Subtitle, { left: true });

    const title = screen.getByRole("heading");
    const child = within(title).getByTestId("child");

    expect(title).not.toBeNull();
    expect(title.classList).toContain("text-left");
    expect(child).not.toBeNull();
})

test("Subtitle centered", {},  () => {
    render(Subtitle, { left: false });

    const title = screen.getByRole("heading");
    const child = within(title).getByTestId("child");

    expect(title).not.toBeNull();
    expect(title.classList).toContain("text-center");
    expect(child).not.toBeNull();
})