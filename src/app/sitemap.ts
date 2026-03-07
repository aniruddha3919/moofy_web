import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://moofy.in';

    // Fetch all blog posts from Sanity
    const posts = await client.fetch(postsQuery);

    const blogEntries = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/social-media-management-kolkata`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/social-media-management-baguiati`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/website-development-baguiati`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/budget-website-development-kolkata`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogEntries,
    ];
}
