import Image from "next/image";
import {signIn} from 'next-auth/client';
import githubImg from '../public/images/github.png';

function Login() {
    return (
        <div className='grid place-items-center'>
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit='contain'
                />
                <div className='flex items-center p-5 bg-gray-600 rounded-full text-white text-center
                cursor-pointer'>
                <h1 onClick={signIn}>Login with Github</h1>
                <Image 
                className='rounded-full border-white'
                src={githubImg}
                height={40}
                width={40}
                />
                </div>
        </div>
    )
}

export default Login
