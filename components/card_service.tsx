'use client'
import { CircleDollarSign } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Cardprops {
  id: string;
  title: string;
  img_src: string;
  price: string;
  description: string;
}

export default function CardService({
  id = "",
  title = "",
  img_src = "",
  price = "",
  description = "",
}: Cardprops) {
   const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return null;
    }
  return (
    <>
      <Card key={id}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {" "}
            <p className="text-green-600 font-bold flex justify-between text-md">
              <CircleDollarSign /> {price}{" "}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={img_src} alt={title} width={250} height={250} />
          <p className="w-full text-justify sm:mt-4 mt-2">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link
            target="_blank"
            href={`https://wa.me/+573502445734?text=Hola,Estoy interesado en el servicio de ${title}`}
          >
            {" "}
            <Button>Comprar</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
