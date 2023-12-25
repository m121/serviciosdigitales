import { CircleDollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import DesignGallery from "./design_gallery";
import BusinessGallery from "./business_gallery";
import SocialGallery from "./social_gallery";




export default function Gallery(){
    return (<div>
        <div className="p-4 sm:p-16">
            <div className="py-8">

            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
     Servicios de diseño
    </h2>
            </div>
            <DesignGallery/>
            <div className="py-8">

            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Servicios de negocios
    </h2>
            </div>
            <BusinessGallery/>
            <div className="py-8">

            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Servicios de Redes Sociales
    </h2>
            </div>
            <SocialGallery/>
            
        </div>
            
    </div>)
}