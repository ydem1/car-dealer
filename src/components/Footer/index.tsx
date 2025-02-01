import { Logo } from "../Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer className="border-t-2 border-gray-base bg-white-base">
    <div className="container flex items-center justify-between py-6">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
