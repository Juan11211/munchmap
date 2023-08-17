"use client"
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function Login() {

    const { data:session } = useSession();
    
    const router = useRouter(); 

    useEffect(() => {
        console.log('session', session);
        if(session?.user){
            router.push('/')        
        }
    }, [session]) // no [] = inifite loop


  return (
    <div className="flex flex-col items-center justify-center border border-black rounded-lg p-4 w-1/3 mx-auto my-20">
      <Image src="/location.png" alt="logo" width={100} height={100} />

      <button onClick={() => signIn()} className="border border-black rounded-lg p-2 mt-4 flex items-center">
        <Image src="/googleicon.svg" alt="Google Icon" width={20} height={20} />
        <span className="ml-2">Login with Google</span>
      </button>
    </div>
  );
}

export default Login;
