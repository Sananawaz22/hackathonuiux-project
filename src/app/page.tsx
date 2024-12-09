import DiscountItem from '@/components/Discountitem'
import FeaturedProducts from '@/components/Featureproducts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import Leatestblog from '@/components/LeatestBlog'
import LatestProducts from '@/components/Leatestproducts'
import Navbar from '@/components/Navbar'
import TrendingProducts from '@/components/Trendungproducts'
import React from 'react'
import MyAccount from './MyAccount/page'

const page = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <DiscountItem/>
      <FeaturedProducts/>
      <Leatestblog/>
       <LatestProducts/>
       <TrendingProducts/>
       <MyAccount/>
      <Footer/>
    </div>
  );
}

export default page