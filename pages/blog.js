import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import {Card,  CardTitle} from 'reactstrap'
import {ThemeProvider} from 'react-ui'
import {tokens, components} from 'react-ui/themes/dark'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

function Crux({info}){
    return(
        <>
          {info.map(({ id, title, description }) => (
        <div className="col-12 col-md-4 cardrowFlex text-center mt-2" key={id}>
        
       <Card className={utilStyles.cardStyle} >
       <Link href="/posts/[id]" as={`/posts/${id}`}>
        <CardTitle className="m-auto">
          {title}
        </CardTitle>
        </Link>
         </Card>
         
         </div> 
          ))}
          </>
          
            
        
    )
}

export default function Blog({allPostsData}){
    return (
    <ThemeProvider tokens={tokens} components={components}>
      <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="container">
          <div className="row justify-content-center ">
            <Crux info={allPostsData}/>
          </div>
        </div>
      </section>
    </Layout>
    </ThemeProvider>
    );
}