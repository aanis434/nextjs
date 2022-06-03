import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Next js pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link> <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  )
}
