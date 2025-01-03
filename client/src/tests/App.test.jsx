import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders welcome message", () => {
  render(<App />);
  const message = screen.getByText(/Bienvenue sur EcoRide/i);
  expect(message).toBeInTheDocument();
});
