import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
 
const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header/>
      <div className='w-11/12 max-w-[670px] flex flex-col gap-y-7 mt-[145px] mb-[20px] justify-center items-center relative'>
        <button className='border-2 border-gray-300 py-1 px-4 rounded-md absolute left-0 top-[-45px]'
        onClick={() => navigation(-1)}>
            Back
        </button>
        <span className='font-bold text-xl absolute left-20 top-[-41px]'> 
            Blogs On <span className='underline'>{category}</span>
        </span>
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
