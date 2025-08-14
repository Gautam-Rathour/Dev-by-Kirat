




export default async function Blog({params}: {
    params: Promise<{
        blogId: string
    }>
}) { 

    const blogId = (await params).blogId;

    return <div>
        {blogId}
    </div>
}



