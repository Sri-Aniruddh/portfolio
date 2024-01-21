import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard} from '../component'
import { Banner } from '../component/index';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log("find post",posts)
                
                

            }else{
            console.log("can't find post")}
        })
    }, [])
  
    if (posts.length != 0) {
        return (
            <div className="w-auto py-0 mt-0 text-center dark:bg-gray-800 dark:text-white ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-8 w-auto">
                            <h1 className="text-2xl font-bold dark:hover:text-gray-200">
                                Login to see portfolio
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        
        <div className='w-auto py-0'>
        <Container>
           <Banner/>

            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
        </div>
        
    )
}

export default Home

