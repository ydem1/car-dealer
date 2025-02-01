"use client";

import React, { FC } from "react";
import { IOptionSelect, SetOptionSelect } from "@/@types";

interface Props {
  option: IOptionSelect;
  setOption: SetOptionSelect;
}

export const SortOption: FC<Props> = ({ option, setOption }) => {
  const onClick = () => setOption(option);

  return (
    <li
      className="text-black-base hover:bg-gray-lighter cursor-pointer rounded-sm border border-t-0 px-3 py-3.5 text-xs transition-all duration-200"
      onClick={onClick}
    >
      {option.label}
    </li>
  );
};
