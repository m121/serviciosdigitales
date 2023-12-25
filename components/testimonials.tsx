import { CircleUserRound } from "lucide-react"

const test = [
    {
        id : "1",
        name : "Camila Rodriguez",
        content : " El proceso fue fácil y eficiente, y la comunicación fluida hizo que todo fuera aún mejor. ",
        img_url : "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    },
    {
        id : "2",
        name : "Monica Perez",
        content : "  La colaboración fue fácil y el resultado final fue más allá de lo que esperaba.  ",
        img_url : "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    },
    {
        id : "3",
        name : "Carlos Franco",
        content : "  Necesitábamos contenido atractivo y persuasivo para nuestras redes sociales, y este equipo logró crear textos perfectos.",
        img_url : "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    }
]


export default function Testimonials(){
    return (<div>
        <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Testimonios de nuestros clientes
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {test.map((item)=>{
            return (
                <blockquote key={item.id} className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
        <CircleUserRound />

          <div>
          

            <p className="mt-0.5 text-lg font-medium text-gray-900">{item.name}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
         {item.content}
        </p>
      </blockquote>
                )
        })}
      

     
    </div>
  </div>
</section>
    </div>)
}