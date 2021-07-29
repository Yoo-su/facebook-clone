import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';

export default function Home({session}) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>YooBook</title>
      </Head>

      <Header />

      <main>
        {/* Sidebar*/}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

//getServerSideProps를 사용하면 매 요청마다 서버에서 페이지 내용들을
//pre render해준다. 따라서 매 요청마다 세션을 통해 로그인 정보를 확인한다.
export async function getServerSideProps(context){
  //Get the User
  const session=await getSession(context);

  return {
    props:{
      session
    }
  }
}