import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='text-5xl'>hi tofayel this is your next level journey get ready for it </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  )
}
