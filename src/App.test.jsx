import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("renders deployment message", () => {
    render(<App />);
    expect(screen.getByText(/Cloudflare/i)).toBeInTheDocument();
  });
});