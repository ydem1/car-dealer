import { ILink } from "@/@types";
import { PATHNAMES } from "@/constants/routes";

export const NAVIGATION_LINKS: ILink[] = [
  {
    id: 1,
    href: PATHNAMES.HOME,
    label: "Home",
  },
  {
    id: 2,
    href: PATHNAMES.HOME,
    label: "Filter",
  },
  {
    id: 3,
    href: PATHNAMES.HOME,
    label: "Cars",
  },
];
