import { Card, CardHeader } from "@/components/ui/card";
import { RefreshCcw } from "lucide-react";


export function Orders() {
    return (
        <main className='sm:ml-14 p-4' >
            <div className="flex flex-col justify-between max-w-3xl mx-auto" >
                <section className="flex  gap-3 items-center justify-between mt-7" >
                    <h1 className="font-medium text-lg" >Últimos pedidos</h1>
                    <button className="bg-transparent" >
                        <RefreshCcw className='h-4 w-4 text-green-600' />
                    </button>
                </section>

                <section className="flex flex-col gap-4 mt-6" >
                    <Card className=" border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                        <CardHeader>
                        <h3 className="font-semibold text-base" >Mesa 30</h3>
                        </CardHeader>
                    </Card>

                    <Card className=" border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                        <CardHeader>
                        <h3 className="font-semibold text-base" >Mesa 30</h3>
                        </CardHeader>
                    </Card>

                    <Card className=" border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                        <CardHeader>
                        <h3 className="font-semibold text-base" >Mesa 30</h3>
                        </CardHeader>
                    </Card>

                    <Card className=" border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                        <CardHeader>
                        <h3 className="font-semibold text-base" >Mesa 30</h3>
                        </CardHeader>
                    </Card>
                </section>
            </div>
        </main>
    )
}