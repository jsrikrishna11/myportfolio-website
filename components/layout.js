import Head from 'next/head'
import styles from './css/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from './navigation'
import { Container, CardMedia, Card, makeStyles} from '@material-ui/core';



const name = 'Sri Krishna J'
export const siteTitle = 'Next.js Sample Website'

const col12 = "col-12"

export default function Layout({ children, home }) {
  return (
    <>
      <Container>
      
        {home ? (
          <>
          <Navigation/>
           <div className="container"> 
           <div className="row justify-content-center">
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} 
              alt={name} 
            />
            </div>
            </div>
          </>
        ) : (
          <>
          <Navigation/>
          </>
          
        )}
      </Container>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}