import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "@/App";

describe("Accordion test", () => {
  test("Should show title", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
