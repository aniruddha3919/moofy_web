import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  "author": author-> {
    name,
    image,
    bio
  },
  "categories": categories[]->title
}`
