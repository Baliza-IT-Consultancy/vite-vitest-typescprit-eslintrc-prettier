import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Button from "../components/UI/button";

describe("Accordion test", () => {
  test("Should show title", () => {
    render(<Button label="Hello" onclick={() => console.log("hello")} />);
    expect(screen).toMatchSnapshot();
  });
});
