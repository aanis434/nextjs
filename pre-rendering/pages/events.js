import { useState } from 'react'
import { useRouter } from 'next/router'

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <h3>Event List with pre-rendering(with ServerSideRendering) + Client Side rendering(filtering)</h3>
            <button onClick={fetchSportsEvents}>Browse Sports Events</button>
            {
                events.map((list) => (
                    <div key={list.id}>
                        <h4>{list.id} {list.title} | {list.category} </h4>
                        <p>{list.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    console.log('context: ', context)
    const queryString = category ? `category=sports` : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: { eventList: data }
    }
}