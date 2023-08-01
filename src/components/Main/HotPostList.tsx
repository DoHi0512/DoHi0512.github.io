import { IPostItem } from "../../types/PostItem.type"
import React, { useMemo } from "react"
import HotPostItem from "./HotPostItem"
import { Link, graphql, useStaticQuery } from "gatsby"
const HotPostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            thumbnail
          }
          rawMarkdownBody
        }
      }
    }
  `)
  const postList = useMemo(() => data.allMarkdownRemark.nodes, [data])
  return (
    <div className=" w-full lg:flex hidden [&>div]:flex [&>div]:flex-col [&>div]:justify-between justify-between mt-16 ">
      <div className="w-3/5">
        <span className="text-6xl font-bold">최근 등록된 글</span>
        <Link to={postList[0].fields.slug} className="h-full mt-4 ">
          <span className="text-4xl font-bold text-omit">
            {postList[0].frontmatter.title}
          </span>
          <img
            src={postList[0].frontmatter.thumbnail}
            className="image-base min-h-[90%] mt-4"
          />
        </Link>
      </div>
      <div className="w-[35%] [&>a]:mt-4">
        <HotPostItem
          title={postList[1].frontmatter.title}
          thumbnail={postList[1].frontmatter.thumbnail}
          link={postList[1].fields.slug}
        />
        <HotPostItem
          title={postList[2].frontmatter.title}
          thumbnail={postList[2].frontmatter.thumbnail}
          link={postList[2].fields.slug}
        />
      </div>
    </div>
  )
}

export default HotPostList
