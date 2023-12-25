'use client'
import { Button } from "./ui/button";
import Link from "next/link";
import CardService from "./card_service";
import { mainservices } from "@/constants";





export default function MainGallery(){


    return (<div>
        <div className="p-4 sm:p-16">
            <div className="py-8">

            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Servicios favoritos
    </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mainservices.map((service)=>{
                    return(
<>
<CardService id={service.id} title={service.title} description={service.description} price={service.price} img_src={service.img_src}/>
</>
                    )
                })}
            


            </div>
            <div className="flex  justify-center w-full py-4">
               <Link href="/servicios"> <Button >Todos los servicios</Button></Link>

            </div>
            
            
        </div>
            
    </div>)
}