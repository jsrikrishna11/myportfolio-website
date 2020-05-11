import styles from '../styles/utils.module.css'
import {Navbar, NavbarBrand} from 'reactstrap'
import Head from 'next/head'

export default function Navigation(){
    return(
    <>
    <Head>
        <title>Sri Krishna J Portfolio</title>
    </Head>
    <Navbar>
      <NavbarBrand className={styles.brandStyle} href="/">Home</NavbarBrand>
      <NavbarBrand className={styles.brandStyle} href="contact">Contact Me</NavbarBrand>
    </Navbar>
    </>
    )
}