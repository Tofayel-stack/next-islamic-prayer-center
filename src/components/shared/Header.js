import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import { LuMailPlus } from 'react-icons/lu';

const Header = () => {
    return (
        <div className='bg-[#8A9535] py-3 font-semibold'>
            <div className='container m-auto flex justify-between text-white'>

                <div>
                    <span > <AiTwotonePhone className='inline'/> 01762000000 </span> &nbsp;
                    <span><LuMailPlus className='inline'/> mdtofayelhossain69@gmail.com</span>
                </div>

                <div className='flex items-center gap-2'>
                    follow us : 
                    <span><BsFacebook/></span>
                    <span><AiFillLinkedin/></span>
                    <span><AiOutlineTwitter/></span>
                </div>
            </div>
        </div>
    );
};

export default Header;