"use client";

import { FC } from "react";

const ErrorPage: FC = () => {
  return (
    <section className="container flex h-full flex-col items-center justify-center gap-10 py-20">
      <h1>Something went wrong</h1>
      <p>Sorry for the inconvenience. The page cannot be loaded.</p>
    </section>
  );
};

export default ErrorPage;
