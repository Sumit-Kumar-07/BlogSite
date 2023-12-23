import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header/>
      <div className="w-11/12 max-w-[670px] flex flex-col gap-y-7 mt-[85px] mb-[20px] justify-center items-center relative">
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Home
