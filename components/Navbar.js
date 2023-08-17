"use client" 
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Navbar() {

    const {data:session} = useSession();
    const router = useRouter()

    useEffect(() => {
      if(!session?.user){
        router.push('/login')
      }
    })

  return (
    <div className='flex items-center justify-between p-4'>
     <div className='flex items-center gap-7 '>
      <Image src='/location.png' 
      width={50}
      height={50}
      alt='logo'
      />
      <h2>Home</h2>
      <h2>Favorite</h2>
    </div>
      <div className=' bg-gray-100 rounded-md p-[6px] w-[40%] gap-3 hidden md:flex '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input type='text' className='bg-transparent outline-none w-full ' placeholder='Search' />

      </div>
      <div className='flex px-2 items-center'>
    {session?.user ? (
        <div className='pr-2'>
            <Image
                src={session.user.image}
                width={40}
                height={40}
                alt='user image'
                className='rounded-full'
            />
        </div>
    ) : null}

    <div className='pl-2'>
        <button onClick={() => signOut()}>
            Sign Out
        </button>
    </div>
</div>

     
    </div>
  )
}

export default Navbar
