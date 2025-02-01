import Link from "next/link";
import { NAVIGATION_LINKS } from "./constants";

export const Navigation = () => (
  <nav>
    <ul className="flex gap-2 lg:gap-5">
      {NAVIGATION_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          <Link
            className="relative text-base text-gray-base hover:opacity-80"
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
