import { Button } from "@components";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("should render correctly!", () => {
  test("Button should render correctly!", () => {
    render(<Button label="Hello" onclick={() => console.log("hello")} />);
    expect(screen).toMatchSnapshot();
  });
});
