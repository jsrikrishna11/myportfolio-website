import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Navigation from '../../components/navigation'


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
    <>
    <Layout>  
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6"><p className="blogTitle">{postData.title}</p></div>
      </div>


        <br />
        {postData.date}
        <br/>
        <div className="row ">
        <div className="col-12 blogContent" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </div>  
    </Layout>
    </>
  
  )
}