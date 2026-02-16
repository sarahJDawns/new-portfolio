import type { Metadata, Site, Socials } from "./types.ts";
export const SITE: Site = {
  TITLE: "Sarah J",
  DESCRIPTION: "A collection.",
  EMAIL: "sarah.j.dawns@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection.",
};

export const ABOUT: Metadata = {
  TITLE: "The Story",
  DESCRIPTION: "Crafting thoughtful solutions with code and bringing ideas to life with ink and watercolor. ",
};

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    HREF: "mailto:sarahdawnjohn@gmail.com?subject=Website%20Inquiry&body=Hello%20there!",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/sarahJDawns",
  },
  {
    NAME: "X",
    HREF: "https://x.com/sjdawns",
  },
  {
    NAME: "RSS",
    HREF: "/rss.xml",
  },
];