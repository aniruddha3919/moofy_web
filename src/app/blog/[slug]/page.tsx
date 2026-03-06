import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'

interface PostPageProps {
    params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = await client.fetch(postBySlugQuery, { slug })

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
            </div>
        )
    }

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    {post.title}
                </h1>
                <div className="flex items-center space-x-4">
                    {post.author?.image && (
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author?.name}</p>
                        <p className="text-sm text-gray-500">
                            {post.publishedAt && new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </header>

            {post.mainImage && (
                <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-lg prose-blue max-w-none">
                <PortableText value={post.body} />
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                    {post.categories?.map((cat: string) => (
                        <span key={cat} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                            {cat}
                        </span>
                    ))}
                </div>
            </footer>
        </article>
    )
}
