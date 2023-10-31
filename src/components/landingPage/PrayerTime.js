import React, { useEffect, useState } from 'react';
import { FaMosque } from 'react-icons/fa';
import { MdSunnySnowing } from 'react-icons/md';
import { PiMosqueFill } from 'react-icons/pi';
import { PiSunHorizonBold } from 'react-icons/pi';
import { GiNightSleep } from 'react-icons/gi';
import { PiClockAfternoonFill } from 'react-icons/pi';
import styles from '../../styles/landing.module.css'

const PrayerTime = () => {


   const [prayerTimeData, setPrayerTimeData] = useState(null)
   const [isLoading, setLoading] = useState(true)

   const date = new Date();
   const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
   // console.log(formattedDate);
  
   useEffect(() => {
     fetch(`http://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Bogra&country=Bangladesh&method=8`)
       .then((res) => res.json())
       .then((data) => {
         setPrayerTimeData(data)
         setLoading(false)
       })
   }, [])



   const allTimings = prayerTimeData?.data?.timings;
   const weekdayName = prayerTimeData?.data?.date.gregorian.weekday.en;
   const day = prayerTimeData?.data?.date?.hijri?.day;
   const month = prayerTimeData?.data?.date?.hijri?.month?.en;
   const year = prayerTimeData?.data?.date?.hijri?.year;
   const timezone = prayerTimeData?.data?.meta?.timezone;
   const englishDate =prayerTimeData?.data?.date?.readable;
   
   

    return (
    
        <div className={`bg-[url("https://www.sunnism.com/wp-content/uploads/2023/05/What-is-Namaz-in-Islam.jpg")] z-0 text-white bg-no-repeat bg-cover px-4 py-20 ${styles.imageOverlay}`} > 

             <div className="container mx-auto md:px-24 lg:px-8 relative z-30">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold  md:mx-auto">
                Today’s Prayer Times
                </h2>
                <p>HIJRI : {day} , {month} , {year} </p>
                <p>{englishDate} , {weekdayName} <span className='text-amber-500'> Timezone :</span> {timezone}</p>
             
            </div>
            <div className="grid grid-cols-2 gap-2 row-gap-2 mb-10 sm:grid-cols-3 lg:grid-cols-6">
                
                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <FaMosque className='text-6xl'></FaMosque>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Fajr}</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <MdSunnySnowing className='text-6xl'></MdSunnySnowing>
                </div>
                <h6 className="font-semibold text-2xl">sunrise</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Sunrise}</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiMosqueFill className='text-6xl'></PiMosqueFill>
                </div>
                <h6 className="font-semibold text-2xl">Dhuhr</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Dhuhr}</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiClockAfternoonFill className='text-6xl'></PiClockAfternoonFill>
                </div>
                <h6 className="font-semibold text-2xl">Asor</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Asr}</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiSunHorizonBold className='text-6xl'></PiSunHorizonBold>
                </div>
                <h6 className="font-semibold text-2xl">Maghrib</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Maghrib}</h6>
                </div>

                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <GiNightSleep className='text-6xl'></GiNightSleep>
                </div>
                <h6 className="font-semibold text-2xl">Isha</h6>
                <h6 className="font-xl text-zinc-500">{allTimings?.Isha}</h6>
                </div>

            </div>
            
            </div>
        </div>
  );
};
export default PrayerTime;