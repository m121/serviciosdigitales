import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero(){
    return (<div>
        <section  id="home" className="text-gray-600 body-font bg-[url('/img/hero_bg.png')] bg-white  bg-cover  ">
  <div className="container mx-auto flex sm:px-5 px-0 sm:py-24 py-0 smt:mt-0 mt-0 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:mt-8 mt-0">
      <h1 className="title-font sm:text-7xl text-3xl mb-2 font-light  text-black">Servicios
<span className="font-black"> Digitales</span> <br/> 
      </h1>
      <p className="mb-8 leading-relaxed text-2xl  text-black">Te ahorramos tiempo y dinero con nuestros servicios.</p>
      <div className="flex justify-center">
        <Button ><Link href="/servicios">Ver servicios</Link></Button>
        
        
      </div>
     
    </div>
   
  </div>


</section>
    </div>)
}