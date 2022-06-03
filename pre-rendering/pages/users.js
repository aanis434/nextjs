import User from '../components/user';
import styles from '../styles/Home.module.css'

function Users({users}) {
    return (
      <div className={styles.container}>
        <h5 className={styles.title}>Users list</h5>
        <div className={styles.grid}>
            {
                users.map((user) => (
                    <div className={styles.card} key={user.id}>
                       <User user={user} />
                    </div>
                ))
            }
        </div>
      </div>
    )
  }

export default Users;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {users: data}
    }
}
  