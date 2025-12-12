
/// <reference types="vitest/globals" />
import { describe, it, expect } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DndImageUpload from "./DndImageUpload.jsx";



describe("DndImageUpload", () => {
  it("renders initial text", () => {
    render(<DndImageUpload />);
    expect(screen.getByText(/drag and drop an image file here/i)).toBeInTheDocument();
  });

  it("shows error when dropping multiple files", () => {
    render(<DndImageUpload />);
    const dropZone = screen.getByText(/drag and drop an image file here/i).parentElement;
    const file1 = new File(["foo"], "foo.png", { type: "image/png" });
    const file2 = new File(["bar"], "bar.png", { type: "image/png" });

    fireEvent.drop(dropZone, {
      dataTransfer: { files: [file1, file2] }
    });

    expect(screen.getByText(/please drop a single file/i)).toBeInTheDocument();
  });

  it("shows error when dropping non-image file", () => {
    render(<DndImageUpload />);
    const dropZone = screen.getByText(/drag and drop an image file here/i).parentElement;
    const file = new File(["foo"], "foo.txt", { type: "text/plain" });

    fireEvent.drop(dropZone, {
      dataTransfer: { files: [file] }
    });

    expect(screen.getByText(/please drop an image file/i)).toBeInTheDocument();
  });

  it("renders image when valid image file is dropped", () => {
    render(<DndImageUpload />);
    const dropZone = screen.getByText(/drag and drop an image file here/i).parentElement;
    const file = new File(["foo"], "foo.png", { type: "image/png" });

    fireEvent.drop(dropZone, {
      dataTransfer: { files: [file] }
    });

    expect(screen.getByAltText(/uploaded foo.png/i)).toBeInTheDocument();
  });
});