'use client'
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import MainGallery from "@/components/main_gallery";
import Testimonials from "@/components/testimonials";

export default function HomePage(){
    return (<div>
        <Hero/>
        <MainGallery/>
        <Testimonials/>
    </div>)
}