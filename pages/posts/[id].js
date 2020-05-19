import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import Navigation from '../../components/navigation'
import {ThemeProvider} from 'react-ui'
import {tokens, components} from 'react-ui/themes/dark'
import styles from '../../components/css/layout.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }



export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export default function Post({postData}) {
  return (
    <ThemeProvider tokens={tokens} components={components}>
    <Layout>  
    <div className="container" style={{marginTop: "10vmax"}}>
      <div className="row justify-content-center">
        <div className="col-6"><p className="blogTitle">{postData.title}</p></div>
      </div>
        <div className="row ">
        <div className="col-12" style={{
          border: "1vmax outset pink",
          padding: "2vmax",
          opacity: "0.5",
          backgroundColor: "#4B5D52",
          color: "white"
        }}
        
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </div>  
    <div className={styles.backToHome} style={{margin: "2vmax"}}>
          <Link href="/blog">
            <a>←Blog Posts</a>
          </Link>
    </div>
    </Layout>
    
    </ThemeProvider>
  
  )
}