"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OrderProps } from "@/lib/order.type";
import { RefreshCcw } from "lucide-react";
import { ModalOrder } from "../modal";
import { use, useState } from "react";
import { OrderContext } from "@/providers/order";

interface Props {
    orders: OrderProps[]
}

export function Orders({ orders }: Props) {
    const { isOpen, onRequestOpen, onRequestClose } = use(OrderContext)



    async function handleDetailOrder(order_id: string) {

        await onRequestOpen(order_id)

    }

    return (
        <>

            <main className='sm:ml-14 p-4' >
                <div className="flex flex-col justify-between max-w-3xl mx-auto" >
                    <section className="flex  gap-3 items-center justify-between mt-7" >
                        <h1 className="font-medium text-lg" >Últimos pedidos</h1>
                        <button className="bg-transparent" >
                            <RefreshCcw className='h-4 w-4 text-green-600' />
                        </button>
                    </section>

                    <section className="flex flex-col gap-4 mt-6 " >
                        {orders.map(order => (

                            // <Dialog key={order.id} >
                            //     <DialogTrigger  >
                            //         <Card  onClick={() => handleDetailOrder(order.id)}  className=" text-start border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                            //             <CardHeader  >
                            //                 <h3 className="font-semibold text-base" >Mesa {order.table}</h3>
                            //             </CardHeader>
                            //         </Card>
                            //     </DialogTrigger>
                            //     <ModalOrder />
                            // </Dialog>
                            <Card key={order.id} onClick={() => handleDetailOrder(order.id)} className=" text-start border-l-4 border-l-green-600 hover:cursor-pointer hover:shadow-md" >
                                <CardHeader  >
                                    <h3 className="font-semibold text-base" >Mesa {order.table}</h3>
                                </CardHeader>
                            </Card>
                        ))}
                    </section>


                </div>

            </main>

            
                {isOpen && <ModalOrder />}
            

        </>
    )
}