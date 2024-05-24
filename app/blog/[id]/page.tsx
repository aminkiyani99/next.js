"use client"

import { usePathname } from "next/navigation";


function PostPage({params}: {params: {id:string}}){
    const pathName = usePathname()

    console.log(pathName);
    
    return (
    <>
    <h2 className="text-lg ">Post Page</h2>
    <div>Post ID:{params.id}</div>
    </>
    )
}

export default PostPage;