import { type CollectionEntry, getCollection } from 'astro:content';
import type { Locale } from '../i18n';

export type Post = CollectionEntry<'blog'>;

// Entries live in src/content/blog/<locale>/<slug>.md, so ids look like "es/<slug>".
export const postSlug = (post: Post): string => post.id.slice(post.id.indexOf('/') + 1);

export const getPosts = async (locale: Locale): Promise<Post[]> =>
  (await getCollection('blog', (post) => post.id.startsWith(`${locale}/`))).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );

export const postPaths = async (locale: Locale) =>
  (await getPosts(locale)).map((post) => ({ params: { slug: postSlug(post) }, props: { post } }));
