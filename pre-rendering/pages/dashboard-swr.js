import useSWR from "swr";

function DashboardSWR() {

    const fetcher = async () => {
        const response = await fetch('http://localhost:4000/dashboard')
        const data = await response.json()

        return data
    }

    const { data, error } = useSWR('dashboard', fetcher)

    if (error) {
        return <h2>Some error happened</h2>
    }

    if (!data) {
        return <h2>Loading.....</h2>
    }

    return (
        <>
            <h1>Dashboard</h1>
            <h3>Posts: {data.posts} </h3>
            <h3>Likes: {data.likes} </h3>
            <h3>Followers: {data.followers} </h3>
            <h3>Following: {data.following} </h3>
        </>
    )

}

export default DashboardSWR