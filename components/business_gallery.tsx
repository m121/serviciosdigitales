import CardService from "./card_service"
import { businessservices } from "@/constants"



export default function BusinessGallery(){


    return (<div>
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {businessservices.map((service)=>{
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