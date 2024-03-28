import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of transition as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the duration between slides in milliseconds
  };

  return (
    <Slider {...settings} className='overflow-hidden'>
      <div >
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png" alt="Image 1" style={{ height: "500px", width: "100%" }} />
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=sph" alt="Image 2" style={{ height: "500px", width: "100%" }} />
      </div>
      <div>
        <img src="https://www.thewatchtower.com/assets/images/blog_images/online-shopping-is-it-really-worth-it.jpg" alt="Image 3" style={{ height: "500px", width: "100%" }} />
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 4" style={{ height: "500px", width: "100%" }} />
      </div>
    </Slider>
  );
};

export default ImageSlider;
