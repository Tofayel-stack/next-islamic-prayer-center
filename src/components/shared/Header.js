import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { LuMailPlus } from 'react-icons/lu';
import Link from 'next/link';

import { useSession, signOut } from "next-auth/react"

const Header = () => {

    const { data: session } = useSession()
    const user = session?.user;

    return (
        <div className='bg-[#8A9535] py-3 font-semibold'>
            <div className='container m-auto flex justify-between text-white'>

                <div className='hidden lg:block'>
                    <span > <AiTwotonePhone className='inline'/> 01762000000 </span> &nbsp;
                    <span><LuMailPlus className='inline'/> mdtofayelhossain69@gmail.com</span>
                </div>

                <div className='flex items-center gap-2 lg:text-base text-xs'>

                    {
                        user? 

                            
                        <> Signed in as {user?.email} 
                            <button className='bg-amber-400 px-2 rounded' onClick={() => signOut()}>Sign out</button> </>
                           
                        :
                        
                        <Link className='bg-amber-400 px-2 rounded' href='/login'>signUp</Link>
                    }
                   
                        
                        
                  

                  follow us : 
                    
                    <span className='hidden lg:block'><BsFacebook/></span>
                    <span className='hidden lg:block'><AiFillLinkedin/></span>
                    <span className='hidden lg:block'><AiOutlineTwitter/></span>
                
                </div>
            </div>
        </div>
    );
};

export default Header;