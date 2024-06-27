import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/svelte";

import Title from "./title.test.svelte";

test("Title to the left", {},  () => {
    render(Title, { left: true });

    const title = screen.getByRole("heading");
    const child = within(title).getByTestId("child");

    expect(title).not.toBeNull();
    expect(title.classList).toContain("text-left");
    expect(child).not.toBeNull();
})

test("Title centered", {},  () => {
    render(Title, { left: false });

    const title = screen.getByRole("heading");
    const child = within(title).getByTestId("child");

    expect(title).not.toBeNull();
    expect(title.classList).toContain("text-center");
    expect(child).not.toBeNull();
})