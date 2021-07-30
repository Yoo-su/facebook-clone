import Image from 'next/image';
import {
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    ChatIcon,
    BellIcon, 
} from '@heroicons/react/solid';
import {
    SearchIcon,
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import React from 'react';
import { signOut,useSession } from 'next-auth/client';

function Header() {
    const session=useSession();

    const headerCenterIcons=[HomeIcon,FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon];

    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
          {/* Left */}
          <div className='flex items-center'>
              <Image 
              src='https://links.papareact.com/5me' 
              width={40} 
              height={40}
              layout='fixed' />
              <div className='flex ml-2 items-center rounded-full bg-gray-200 p-2'>
                  <SearchIcon className='h-6 text-gray-600' />
                  <input className='hidden md:flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder="Search Facebook" />
              </div>
          </div>

          {/* Center */}
          <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                {headerCenterIcons.map(icon=>(
                    <HeaderIcon key={icon} Icon={icon} active={icon===HomeIcon?true:false} />
                ))}
            </div>
          </div>

          {/* Right */}
          <div className='flex items-center sm:space-x-2 justify-end'>
                    {/* Profile pic */}
                    <Image 
                        className='rounded-full cursor-pointer'
                        src={session[0].user.image}
                        width={40}
                        height={40}
                        onClick={signOut}
                    />
                    <p className='hidden lg:inline-flex whitespace-nowrap font-semibold pr-3'>{session[0].user.name}</p>
                    <ViewGridIcon className='icon'/>
                    <ChatIcon className='icon'/>
                    <BellIcon className='icon'/>
    
          </div>
        </div>
    )
}

export default Header
