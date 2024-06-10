import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { act } from "react";

jest.unstable_mockModule("./getText", () => ({
  getText: jest.fn(() => Promise.resolve("testing")),
}));

const { getText } = await import("./getText");
const { Text } = await import("./Text");

describe("Text", () => {
  it("should render the text", async () => {
    await act(async () => {
      render(<Text />);
      await Promise.resolve();
    });

    expect(jest.mocked(getText)).toHaveBeenCalledTimes(1);
    expect(screen.getByText("testing")).toBeInTheDocument();
  });
});
