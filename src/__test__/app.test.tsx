import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("basic", () => {
   test("test function", () => {
      function sum(a: number, b: number) {
         return a + b;
      }

      expect(sum(2, 3)).toEqual(5);
   });
   test("find hello world", () => {
      render(<App />);
      const findText = screen.getByText("Hello World");
      expect(findText).toBeTruthy();
   });
});
