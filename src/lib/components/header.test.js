import { expect, test } from "vitest";
import Header from "./header.svelte";
import { render, screen } from "@testing-library/svelte";

test("Header", {},  () => {
    render(Header, {});

    const header = screen.getByRole("banner");

    expect(header).not.toBeNull();
})