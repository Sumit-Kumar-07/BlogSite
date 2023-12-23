import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[15px]'>

      <NavLink to={`/blog/${post.id}`} >
        <span className='font-bold text-lg hover:underline'>{post.title}</span>
      </NavLink>

      <p className='text-sm mt-[4px]'>
        By
        <span className='italic'> {post.author} </span>
        On {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>

      <p className='text-sm mt-[4px]'>Posted on {post.date} </p>

      <p className='text-md mt-[14px]'> {post.content}</p>

      <div className='flex gap-x-3 mt-[8px]'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="text-blue-700 underline font-bold text-xs">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
