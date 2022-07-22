import { render, screen } from "@testing-library/react";
import Login from "../Login";
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
      <Login />
    </Router>
  );
  const linkElement = screen.getByText(/Lupa Password?/i);
  expect(linkElement).toBeInTheDocument();
});
