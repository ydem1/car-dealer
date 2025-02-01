import { SOCIAL_MEDIA_LINKS } from "./constants";

export const SocialMediaLinks = () => (
  <nav>
    <ul className="flex gap-5">
      {SOCIAL_MEDIA_LINKS.map(({ id, href, icon }) => (
        <li key={id}>
          <a
            className="text-gray-dark hover:opacity-80"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{icon}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
