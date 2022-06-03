import Link from 'next/link';

function PostList({ posts }) {
    return (
        <>
            <h3>Post List</h3>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>
                        <p>{post.id} - {post.title}</p>
                    </Link>
                    <hr />
                </div>
            ))
            }
        </>
    )
}

export default PostList;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: { posts: data }
    }
}