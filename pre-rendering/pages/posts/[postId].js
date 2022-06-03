import {useRouter} from 'next/router';

function PostDetails({ post }) {
    // if blocking fallback state don't need 
    // const router = useRouter()

    // if(router.isFallback){
    //     return <h1>Loading...</h1>
    // }
    return (
        <>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default PostDetails;

export async function getStaticPaths() {
    // if fallback state is true or 'blocaking' then don't need dynamic paths ***
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const data = await res.json()
    // const paths = data.map((post) => {
    //     return {
    //         params: { postId: `${post.id}` }
    //     }
    // })

    // fallback: 'blocking' -  loaded without loading indicator or fallback state
    // fallback: true -  loaded with loading indicator or fallback state || recomended
    // fallback: false -  loaded static html file with dynamic paths with fetching data || not recommended for large ecommerce site or large amount data
    return {
        paths: [
            {
                params: {postId: '1'},
            },
            {
                params: {postId: '2'},
            },
            {
                params: {postId: '3'},
            }
        ],
        fallback: 'blocking',  
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    console.log(`Generating for posts/${data.id}`)

    if(!data.id){
        return {
            notFound: true
        }
    }

    return {
        props: { post: data }
    }
}