"use client";

let ROOT_ELEMENT: HTMLElement | null;

if (typeof document !== "undefined") {
  ROOT_ELEMENT = document.getElementById("root");
}

export { ROOT_ELEMENT };
