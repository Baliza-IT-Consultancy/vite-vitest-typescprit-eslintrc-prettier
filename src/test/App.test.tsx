import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import App from "@/App";

describe("should render correctly!", () => {
  test("App Should render correctly!", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
