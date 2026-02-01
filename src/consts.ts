import type { Metadata, Site, Socials } from "./types.ts";
export const SITE: Site = {
  TITLE: "Sarah J Dawn",
  DESCRIPTION: "A collection.",
  EMAIL: "sarah.j.dawns@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PIECES_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Sarah J. — Support Engineer & Artist",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my technical work and experiments.",
};

export const POSTS: Metadata = {
  TITLE: "Art & Thoughts",
  DESCRIPTION: "Ink, watercolor, and occasional musings.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly)",
    HREF: "https://x.com/sjdawns",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/sarahJDawns",
  },
  {
    NAME: "Website",
    HREF: "#",
  },
  {
    NAME: "Email",
    HREF: "mailto:sarah.j.dawns@gmail.com?subject=Website%20Inquiry&body=Hello%20there!",
  },
];