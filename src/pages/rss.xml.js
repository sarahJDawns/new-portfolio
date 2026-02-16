import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
  // 1. Only get projects (since we deleted 'posts')
  const projects = await getCollection('projects', ({ data }) => data.draft !== true);

  // 2. Sort them
  const items = projects.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Sarah J | Ink & Code',
    description: 'A collection of digital logic and analog art.',
    site: context.site,
    // ADD THIS LINE BELOW to define the "content" namespace
    xmlns: {
      content: 'http://purl.org/rss/1.0/modules/content/',
    },
    items: await Promise.all(items.map(async (item) => {
      const { rendered } = await render(item);
      
      return {
        title: item.data.title,
        pubDate: item.data.pubDate,
        description: item.data.description || '',
        link: `/projects/${item.id}/`,
        // Use "content" here to map to the namespace above
        content: sanitizeHtml(rendered?.html ?? '', {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
      };
    })),
    customData: `<language>en-us</language>`,
  });
}