import RootLayout from '@/components/layout/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = ({singleBlog}) => {


  const blogDetails = singleBlog.data;



    // just pic the id .. form the component
    const router = useRouter()
    const catchTheId = router.query.blogID;
    console.log(catchTheId);



  console.log(blogDetails);

    return (


      <div className="max-w-screen-xl mx-auto">
          <main className="mt-10">

            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-72">
            <div className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.7)' }}></div>

              <img src={blogDetails?.blogImageUrl} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
              <div className="p-4 absolute bottom-0 left-0 z-20">
              
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {blogDetails?.title}
                </h2>
                <div className="flex mt-3">
                  <img src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">{blogDetails?.author}</p>
                    <p className="font-semibold text-gray-400 text-xs">{blogDetails?.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
              <p className="pb-6">{blogDetails?.description}</p>

            


              <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

              <p className="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
                oh he common
                future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
                simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

              <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
                Hundred no
                prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
                ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
                connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
                ask expense are compact. New all paid few hard pure she.</p>


            </div>
          </main>

      </div> 



    );
};

export default BlogDetails;


BlogDetails.getLayout = function getLayout(page) {
    return (
      
        <RootLayout>{page}</RootLayout>
     
    )
  }




  export const getServerSideProps = async (context)=> {
    const {params} = context;
    const blogID = params.blogID;
    const res = await fetch(`https://next-islamic-prayer-center-seven.vercel.app/api/blog?blogID=${blogID}`)
    const data = await res.json()

    console.log(data);
    

    return {
        props: { singleBlog:data }
    }
}