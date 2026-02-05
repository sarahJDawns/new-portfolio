import type { Metadata, Site, Socials } from "./types.ts";
export const SITE: Site = {
  TITLE: "Sarah J",
  DESCRIPTION: "A collection.",
  EMAIL: "sarah.j.dawns@gmail.com",
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A collection.",
};

export const PROJECTS: Metadata = {
  TITLE: "Code",
  DESCRIPTION: "A collection of my technical work and experiments.",
};

export const POSTS: Metadata = {
  TITLE: "Art",
  DESCRIPTION: "Ink, watercolor, and occasionally something else.",
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
  }
];