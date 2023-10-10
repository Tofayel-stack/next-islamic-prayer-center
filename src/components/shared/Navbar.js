import Link from 'next/link';
import mainLogo from '../../assets/logoIslamic.png'


const Navbar = () => {
    return (
      
            <header className="header z-30 sticky top-0 bg-white shadow-md flex items-center justify-center px-8 py-02">

                <nav className="nav font-semibold text-lg">
                    <ul className="flex items-center">
                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                        
                        <Link href='/'>Home</Link>
                        </li>
                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link href="/service">Service</Link>
                        </li>
                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link href="/about">About Us</Link>
                        </li>

                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 cursor-pointer">
                        <Link href="/">
                            <img className='w-28 h-22'
                            src='https://i.ibb.co/W3b4PJc/24-242664-islamic-logo-free-png-transparent-png-removebg-preview.png'
                            alt="logo" /></Link>
                        </li>

                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link href="/blog">Blog</Link>
                        </li>
                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link href="/events">Events</Link>
                        </li>
                        <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

            </header>
      
    );
};

export default Navbar;