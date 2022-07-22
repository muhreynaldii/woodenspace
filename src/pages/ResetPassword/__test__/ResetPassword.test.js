import { render, screen } from "@testing-library/react";
import ResetPassword from "../ResetPassword";
import { BrowserRouter as Router } from "react-router-dom";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Title", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );

  const linkElement = screen.getByText(/Sudah memiliki email dan password?/i);
  expect(linkElement).toBeInTheDocument();
});
