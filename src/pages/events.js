import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const Events = () => {
    return (
        <div>
            Events
        </div>
    );
};

export default Events;


Events.getLayout = function getLayout(page) {
    return (
      
        <RootLayout>{page}</RootLayout>
     
    )
  }