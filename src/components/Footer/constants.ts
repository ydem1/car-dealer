import { ILink } from "@/@types";
import GitHub from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Telegram from "@/assets/icons/telegram.svg";
import Email from "@/assets/icons/email.svg";
import Instagram from "@/assets/icons/instagram.svg";

export const SOCIAL_MEDIA_LINKS: ILink[] = [
  {
    id: 1,
    href: "https://github.com/ydem1",
    icon: GitHub,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/vadym-bavorovskiy-146b19280/",
    icon: LinkedIn,
  },
  {
    id: 3,
    href: "https://t.me/vadymb14",
    icon: Telegram,
  },
  {
    id: 4,
    href: "mailto:vadymbavorovskyi@gmail.com",
    icon: Email,
  },
  {
    id: 5,
    href: "https://www.instagram.com/_ydem_/",
    icon: Instagram,
  },
];
