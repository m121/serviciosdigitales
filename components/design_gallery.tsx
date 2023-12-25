import CardService from "./card_service"
import { designservices } from "@/constants"



export default function DesignGallery(){


    return (<div>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {designservices.map((service)=>{
                    return(
<>
<CardService id={service.id} title={service.title} description={service.description} price={service.price} img_src={service.img_src}/>
</>
                    )
                })}
            


            </div>

        </div>
    </div>)
}