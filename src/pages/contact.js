import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const Contact = () => {
    return (
        <div>
            this is contact ... 
        </div>
    );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
    return (
      
        <RootLayout>{page}</RootLayout>
     
    )
  }