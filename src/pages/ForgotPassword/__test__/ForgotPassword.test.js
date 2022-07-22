import { render, screen } from "@testing-library/react";
import ForgotPassword from "../ForgotPassword";
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
      <ForgotPassword />
    </Router>
  );

  const linkElement = screen.getByText(/Masuk di sini/i);
  expect(linkElement).toBeInTheDocument();
});
