import { useEffect, useState } from "react";

type GreetProps = {
    name: string
    id?: number//optional parameter
}

type PostsType = {
    title:string,
    body:string,
    userId:number,
    firstName:string,
    lastName:string
}

export const Greet = (props: GreetProps) => {
    let [userPosts,setUserPosts] = useState<PostsType[]>([]);
    async function getUserPost(userId:number){
        let response = await fetch(`https://dummyjson.com/users/${userId}`);
        let result = await response.json();
        // console.log(result)
        return result;
    }
    useEffect(() => {
        async function getPost() {
            let response = await fetch("https://dummyjson.com/posts");
            let result = await response.json();

            const PostWithUserDetail=await Promise.all(
                result.posts.slice(0, 10).map(async(posts:any)=>{
                    const userResponse= await getUserPost(posts.userId)
                    return{
                        ...posts,
                        firstName:userResponse.firstName,
                        lastName:userResponse.lastName
                    }
                })
            )
            setUserPosts(PostWithUserDetail);
        }

        getPost();
    }, [])

    console.log(userPosts)
    return (
        <div>
            <h2>Welcome to typescript with reactjs {props.name}</h2>
            <ul>
            {userPosts.map((post)=>(
                 <li>
                    {post.userId} {post.title} {post.body} {post.firstName} {post.lastName}
                 </li>
            ))}
            </ul>
        </div>
    )
}