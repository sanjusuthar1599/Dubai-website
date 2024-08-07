import React from 'react';
import './Project.css'

const Project = () => {
  const images = [
    "https://d347obdezjxuw9.cloudfront.net/binghatti-hills/hills-design-d.png",
    "https://d347obdezjxuw9.cloudfront.net/binghatti-hills/hills-details-d.png",
    "https://d347obdezjxuw9.cloudfront.net/binghatti-hills/hills-destination-d.png"
  ];

  return (
    <>

<section className="relative h-screen w-screen overflow-hidden">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="https://lh7-us.googleusercontent.com/SK7nqC3hnI14kt-5no0GZIj9w1WtktFsayCie7i3xqGd-qHs7tUs5jG7EhgjUs2p5b3M-PpxZT2csmPv9xBGLuGzXSdl1v3_VR8SEa9bBDrYC_1PdIc8b4AL7pbwOcXfLh1J94eWjXJoZoHyC9k1TV0"
    alt=""
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right p-8 md:p-12 lg:px-16 lg:py-24">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Upcoming Projects
      </h2>
    </div>
  </div>
</section>


      <div className="containers">
        {images.map((src, index) => (
          <a href="#" className="card" key={index}>
            <img alt="" src={src} className="card-image" />
            <div className="card-content">
              <p className="card-title">Developer</p>
              <p className="card-name">Tony Wayne</p>
              <div className="card-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                  quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Project;
