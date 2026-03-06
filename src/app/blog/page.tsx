import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { postsQuery } from '@/sanity/lib/queries'

export default async function BlogPage() {
    const posts = await client.fetch(postsQuery)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                    <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {post.mainImage && (
                            <div className="relative h-48 w-full">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                {post.publishedAt && (
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                )}
                                {post.author && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span>{post.author}</span>
                                    </>
                                )}
                            </div>
                            <Link href={`/blog/${post.slug.current}`}>
                                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.categories?.map((cat: string) => (
                                    <span key={cat} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            {posts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">No blog posts found. Stay tuned!</p>
                </div>
            )}
        </div>
    )
}
