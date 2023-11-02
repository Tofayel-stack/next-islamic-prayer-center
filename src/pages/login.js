import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/router";



const Login = () => {

    const router = useRouter()

    const customLogin = () =>{
        
        console.log('button clicked');
        router.push('/')
        alert('this feature coming soon !!')
           
    }


    return (


    <section className="min-h-screen flex items-stretch text-white ">

  


        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{background : "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"}}>
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                <p className="text-3xl my-4">Please continue your learning about Islam</p>
            </div>
        </div>



        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{background : "#161616"}}>

            <div className="w-full py-6 z-20">
                 <h1 className="text-4xl font-semibold">Log in</h1>
                 <div className="bg-amber-600 rounded p-1 mt-1 w-28 text-center m-auto" ><Link href='/'>Go to home</Link></div>

              
                <div className="py-6 space-x-2">

                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                        <button onClick={() => signIn('github',{
                                callbackUrl:"https://qjm86z1j-3000.inc1.devtunnels.ms/"
                            })}>git</button>
                        </span>

                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">  <button onClick={() => signIn('google',{
                                callbackUrl:"https://qjm86z1j-3000.inc1.devtunnels.ms/"
                            })}>G+</button>
                        </span>

                    
                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
                </div>


                <p className="text-gray-100"> or use email your account</p>


                <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    
                    <div className="px-4 pb-2 pt-4">
                        <button onClick={()=>customLogin()} className="uppercase block w-full p-3 rounded bg-lime-600 ">sign in</button>
                    </div>

                </form>
            </div>
        </div>

    </section>

    );
};

export default Login;