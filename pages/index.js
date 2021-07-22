import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="users" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Ea adipisicing anim culpa consectetur elit adipisicing laboris officia. Qui esse magna dolore elit duis quis labore eu. Magna in aute labore aute occaecat sint velit reprehenderit aliqua. Sunt Lorem irure consequat occaecat tempor proident ea. Ut ea est anim sint officia ex laborum ex sunt duis consectetur excepteur. Id minim ad Lorem aliquip adipisicing laboris ad incididunt.</p>
      <p className={styles.text}>Culpa id ut id elit. In ipsum ullamco labore pariatur do eiusmod veniam aute consectetur ut. Deserunt ullamco aliqua voluptate magna elit proident adipisicing qui quis nisi incididunt nisi eu. Consequat mollit sint consectetur et officia pariatur pariatur. Do fugiat ea do pariatur mollit aute adipisicing eiusmod Lorem eiusmod. Exercitation labore nisi magna in veniam laborum sunt velit sunt esse ea.</p>
      <Link href="/users">
        <a className={styles.btn}>See User Listing</a>
      </Link>

    </div>
    </>
  )
}
