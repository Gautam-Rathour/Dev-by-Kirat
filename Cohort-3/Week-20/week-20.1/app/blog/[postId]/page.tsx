


import axios from "axios";


export default async function BlogPage({params}: any) {
    const postId = (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    const data = response.data;


    return <div>
        Blog page :- {postId}

        <br/><br/><br/>

        Title - { data.title }
        Body - { data.body }
    </div>
}