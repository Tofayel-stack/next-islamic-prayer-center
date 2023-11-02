import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout'
import Banner from '@/components/landingPage/Banner'
import Welcome from '@/components/landingPage/Welcome'
import PrayerTime from '@/components/landingPage/PrayerTime'
import Services from '@/components/landingPage/Services'
import PillarsIslam from '@/components/landingPage/PillarsIslam'
import IslamicNews from '@/components/landingPage/IslamicNews'

const inter = Inter({ subsets: ['latin'] })

export default function Home({allService}) {
  return (
    <>
    
    
     {/* nav bar is coming form layout */}

    {/* hole landing page  */}
   <Banner></Banner>
   <Welcome></Welcome>
   <PrayerTime></PrayerTime>
   <Services allService={allService}></Services>
   <PillarsIslam></PillarsIslam>
   <IslamicNews></IslamicNews>




   {/* footer from layout */}
    
    </>

  )
}


Home.getLayout = function getLayout(page) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  )
}




export const getStaticProps = async () => {
  
  const res = await fetch('https://next-islamic-prayer-center-seven.vercel.app/api/services');
  const data = await res.json();

  // console.log('Fetched data:', data);
  
  return {
      props: { allService: data },
      revalidate: 10,
  };
}

