import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({session, posts}) {
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>YooBook</title>
      </Head>

      <Header />

      <main className='flex'>
        {/* Sidebar*/}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

//getServerSideProps를 사용하면 매 요청마다 서버에서 페이지 내용들을
//pre render해준다. 따라서 매 요청마다 세션을 통해 로그인 정보를 확인한다.
export async function getServerSideProps(context){
  //Get the User
  const session=await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp','desc').get();

  const docs=posts.docs.map(post=>({
    id:post.id,
    ...post.data(),
    timestamp:null
  }));

  return {
    props:{
      session,
      posts:docs
    }
  }
}