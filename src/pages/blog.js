import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const Blog = () => {
    return (
        <div>
            blog
        </div>
    );
};

export default Blog;


Blog.getLayout = function getLayout(page) {
    return (
      
        <RootLayout>{page}</RootLayout>
     
    )
  }