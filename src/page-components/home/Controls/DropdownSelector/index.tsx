"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { IOptionSelect, SetOptionSelect } from "@/@types";
import cn from "classnames";
import { Dropdown } from "@/components/Dropdown";
import { IMAGES_ALTS } from "@/constants/imageAlts";
import arrowIcon from "@/assets/icons/arrow.svg";
import { SortOption } from "./SortOption";

interface Props {
  className?: string;
  options: IOptionSelect[];
  activeOption: IOptionSelect | null;
  setOption: SetOptionSelect;
  headLabel: string;
}

export const DropdownSelector: FC<Props> = ({
  className,
  options,
  activeOption,
  setOption,
  headLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const headDropdownLabel = (
    <div className="flex w-full items-center justify-between gap-8 rounded-sm border bg-white-base px-3 py-3.5">
      <p className="flex gap-1 text-sm">
        <span className="text-black-base">{headLabel}</span>

        {activeOption && (
          <span className="text-gray-base">{activeOption.label}</span>
        )}
      </p>

      <Image
        src={arrowIcon}
        className={cn("transition-all duration-200", {
          "rotate-180": isOpen,
        })}
        alt={IMAGES_ALTS.arrow}
      />
    </div>
  );

  const filteredOptions = activeOption
    ? options.filter(({ value }) => value !== activeOption.value)
    : options;

  const setActiveOption = (option: IOptionSelect) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <Dropdown
      className={className}
      head={headDropdownLabel}
      bodyClassName="bg-white-base w-full top-12 z-20"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ul>
        {filteredOptions.map((option) => (
          <SortOption
            key={option.value}
            option={option}
            setOption={setActiveOption}
          />
        ))}
      </ul>
    </Dropdown>
  );
};
