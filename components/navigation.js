import styles from '../styles/utils.module.css'
import {Navbar, NavbarBrand} from 'reactstrap'
import Head from 'next/head'

export default function Navigation(){
    return(
    <>
    <Head>
        <title>Sri Krishna J Portfolio</title>
    </Head>
    <Navbar fixed={"top"} style={{backgroundColor:"#0C1804"}} className="mb-5" >
      <NavbarBrand className={styles.brandStyle} href="/">Home</NavbarBrand>
      <NavbarBrand className={styles.brandStyle} href="contact">Contact</NavbarBrand>
    </Navbar>
    </>
    )
}