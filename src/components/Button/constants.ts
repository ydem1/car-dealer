import cn from "classnames";
import { ButtonVariants } from "./types";

const DEFAULT_BUTTON_CLASSNAME = "rounded-lg text-lg font-bold px-10 py-2";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-gray-base text-white-base hover:opacity-80",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-white-base text-gray-base border-2 border-gray-base hover:opacity-80",
    DEFAULT_BUTTON_CLASSNAME
  ),
};
