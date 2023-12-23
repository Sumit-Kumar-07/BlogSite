import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();
  const {fetchBlogPosts} = useContext(AppContext);
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white z-40">
      <h1 className="font-bold text-3xl uppercase text-center cursor-pointer" onClick={()=> fetchBlogPosts(1,null,null) && navigation("/")}>
        Tech Blogs
      </h1>
    </header>
  );
}
