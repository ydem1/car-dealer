"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ButtonVariants } from "@/components/Button/types";
import { generateCarOptions } from "@/utils/generateCarOptions";
import { generateYearOptions } from "@/utils/generateYearOptions";
import { getItemPath } from "@/utils/getItemPath";
import { PATHNAMES } from "@/constants/routes";
import { IOptionSelect } from "@/@types";
import { IMake } from "@/@types/make";
import { DropdownSelector } from "./DropdownSelector";

interface Props {
  cars: IMake[];
}

export const Controls: FC<Props> = ({ cars }) => {
  const MAKE_ID_OPTIONS = generateCarOptions(cars);
  const YEAR_OPTIONS = generateYearOptions();

  const [makeIdOption, setSetMakeIdOption] = useState<IOptionSelect | null>(
    null
  );
  const [yearOption, setYearOption] = useState<IOptionSelect | null>(null);

  const isDisabled = !makeIdOption || !yearOption;

  const hrefResult =
    !isDisabled &&
    getItemPath(PATHNAMES.RESULT, {
      makeId: makeIdOption?.value,
      year: yearOption?.value,
    });

  const handleReset = () => {
    setYearOption(null);
    setSetMakeIdOption(null);
  };

  return (
    <div className="flex w-full max-w-96 flex-col gap-12">
      <div className="flex gap-10">
        <DropdownSelector
          className="flex-1"
          headLabel="Make"
          options={MAKE_ID_OPTIONS}
          activeOption={makeIdOption}
          setOption={setSetMakeIdOption}
        />

        <DropdownSelector
          className="flex-1"
          headLabel="Year"
          options={YEAR_OPTIONS}
          activeOption={yearOption}
          setOption={setYearOption}
        />
      </div>

      <div className="flex gap-10">
        <Button
          className="flex-1"
          variant={ButtonVariants.PRIMARY}
          isDisabled={isDisabled}
        >
          {hrefResult ? <Link href={hrefResult}>Next</Link> : <span>Next</span>}
        </Button>

        <Button
          className="flex-1"
          onClick={handleReset}
          variant={ButtonVariants.SECONDARY}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
