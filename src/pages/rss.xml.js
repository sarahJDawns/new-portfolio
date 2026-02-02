import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const projects = await getCollection('projects');

  // Combine and sort by date
  const items = [...posts, ...projects].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Sarah J | Ink & Code',
    description: 'A collection of digital logic and analog art.',
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      pubDate: item.data.pubDate,
      description: item.data.description || '',
      link: `/${item.collection}/${item.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}