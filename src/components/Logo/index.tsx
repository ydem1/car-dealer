import Image from "next/image";
import Link from "next/link";
import { PATHNAMES } from "@/constants/routes";
import logo from "@/assets/images/ava.jpg";

const LOGO_IMAGE_ALT_TEXT = "Car Dealer";

export const Logo = () => (
  <Link href={PATHNAMES.HOME}>
    <Image className="w-10 rounded-full" src={logo} alt={LOGO_IMAGE_ALT_TEXT} />
  </Link>
);
