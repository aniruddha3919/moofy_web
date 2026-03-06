import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'

interface PostPageProps {
    params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
    const rawParams = await params
    const slug = decodeURIComponent(rawParams.slug)
    console.log('Fetching post for decoded slug:', slug)

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        console.error('ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID is NOT defined!')
    }

    const post = await client.fetch(postBySlugQuery, { slug })
    console.log('Post fetched:', post ? 'Success' : 'Failed (null)')

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
                <div className="mt-8 p-4 bg-gray-100 rounded text-left font-mono text-sm inline-block">
                    <p>Debug Info:</p>
                    <p>- Slug received: "{slug}"</p>
                    <p>- Project ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'Loaded (starts with ' + process.env.NEXT_PUBLIC_SANITY_PROJECT_ID.slice(0, 3) + ')' : 'MISSING'}</p>
                    <p>- Dataset: {process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}</p>
                </div>
                <p className="mt-4 text-gray-600">
                    Make sure you have clicked "Publish" in Sanity Studio for a post with the slug above.
                    Also, remember to restart your terminal (npm run dev) after adding .env.local!
                </p>
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
