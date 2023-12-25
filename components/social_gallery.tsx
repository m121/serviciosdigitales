import CardService from "./card_service"
import { socialservices } from "@/constants"



export default function SocialGallery(){


    return (<div>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialservices.map((service)=>{
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