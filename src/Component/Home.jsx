
import React from 'react';
import Cart from './Cart';
import Map from './Map';

const Home = () => {
  return (
    <>
    <section className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source
          src="public/Dubaivideo.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 h-full flex items-center justify-center">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Welcome to Dubai
          </h2>
        </div>
      </div>

    </section>

    <Cart/>
    <Map/>
</>
  );
}

export default Home;
