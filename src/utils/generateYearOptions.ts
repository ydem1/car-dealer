"use client";

import { IOptionSelect } from "@/@types";

export const generateYearOptions = (): IOptionSelect[] => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i
  );

  return years.map((year, index) => ({
    id: index,
    value: year,
    label: year.toString(),
  }));
};
