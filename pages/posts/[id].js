
import { getAllPostIds } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }