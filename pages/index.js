import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Bacon ipsum dolor amet pancetta meatloaf swine picanha hamburger, ground round tri-tip capicola. Turducken kevin sausage, bresaola andouille shoulder shankle venison tri-tip pork loin ham tenderloin filet mignon porchetta drumstick</p>
        <p className={styles.text}>Bacon ipsum dolor amet pancetta meatloaf swine picanha hamburger, ground round tri-tip capicola. Turducken kevin sausage, bresaola andouille shoulder shankle venison tri-tip pork loin ham tenderloin filet mignon porchetta drumstick</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
