import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-purple-400'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-8">
        <div className=" text-center">
          <div className="heading font-bold text-xl">E-commerce</div>
          <ul className=" font-medium text-black mt-3">
            <li><Link  to="https://github.com/themesberg/flowbite" className="hover:underline">Who We Are</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">Join Our Team</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">Term & Conditions</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">We Respect Your Privacy</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">Fees & Payments</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">Return & Refunds Policy</Link></li>
            <li><Link  to="https://discord.gg/4eeurUVvTy" className="hover:underline">Promotions Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="text-center">
          <div className=" font-bold text-xl">Help</div>
          <ul className="text-black font-medium mt-3">
            <li><Link  to="/" className="hover:underline">Track Your Order</Link></li>
            <li><Link  to="/" className="hover:underline">Frequently Asked Questions</Link></li>
            <li><Link  to="/" className="hover:underline">Returns</Link></li>
            <li><Link  to="/" className="hover:underline">Cancellations</Link></li>
            <li><Link  to="/" className="hover:underline">Payments</Link></li>
            <li><Link  to="/" className="hover:underline">Customer Care</Link></li>
            <li><Link  to="/" className="hover:underline">How Do I Redeem My Coupon</Link></li>
          </ul>
        </div>
        <div className="text-center">
          <div className="font-bold text-xl">Shop by</div>
          <ul className="text-black font-medium mt-3">
            <li><Link  to="/" className="hover:underline">Men</Link></li>
            <li>< Link to="/" className="hover:underline">Women</Link></li>
            <li><Link  to="/" className="hover:underline">Kids</Link></li>
            <li><Link  to="/" className="hover:underline">Indie</Link></li>
            <li><Link to="/" className="hover:underline">Stores</Link></li>
            <li><Link  to="/" className="hover:underline">New Arrivals</Link></li>
            <li><Link  to="/" className="hover:underline">Brand Directory</Link></li>
            <li><Link  to="/" className="hover:underline">Home</Link></li>
            <li><Link  to="/" className="hover:underline">Collections</Link></li>
          </ul>
        </div>
        <div className="text-center ">
          <div className="font-bold text-xl ">Follow us</div>
          <ul className="text-black font-medium mt-3">
            <li><Link  to="/" className="hover:underline">Facebook</Link></li>
            <li><Link  to="/" className="hover:underline">Instagram- AJIOlife</Link></li>
            <li><Link  to="/" className="hover:underline">Instagram-AJIO LUXE</Link></li>
            <li><Link  to="/" className="hover:underline">Twitter</Link></li>
            <li><Link  to="/" className="hover:underline">Pinterest</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-centerm py-2">
        <span className='flex justify-center items-center text-black font-semibold'>KEEP IN TOUCH</span>
        <span className='ml-6 flex gap-3 justify-center items-center'>
          <Link className="mx-1" to='https://www.youtube.com'><img
            alt="youtube logo"
            width="45"
            height="45"
            src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
          />
          </Link>
          <Link className="mx-1" href='https://www.instagram.com'><img
            alt="instagram logo"
            width="30"
            height="30"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          />
          </Link>
          <Link   className="mx-1" to='https://www.linkedin.com'><img
            alt="linkedin logo"
            width="30"
            height="30"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
          />
          </Link>
          <Link Link to='https://www.facebook.com/'><img
            alt="facebook logo"
            
            width="30"
            height="30"
            
            className="mx-1"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
