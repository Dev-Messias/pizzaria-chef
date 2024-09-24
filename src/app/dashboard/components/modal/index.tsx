"use client"

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { OrderContext } from "@/providers/order";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { calculateTotalOrder } from "@/lib/helper";


export function ModalOrder() {
    const { isOpen, onRequestClose, order, finishOrder } = use(OrderContext);
    const fileURL = process.env.NEXT_PUBLIC_FILE_URL;

    async function handleFinishOrder() {
        await finishOrder(order[0].order.id);
    }

    return (
        
            <Dialog open={isOpen} onOpenChange={onRequestClose}   >
                
                    <DialogContent    >
                        <DialogHeader className="flex items-start" >
                            <DialogTitle className="font-bold text-lg" >Detalhes do pedido</DialogTitle>
                            <DialogDescription className=" flex flex-row justify-between items-center text-green-600 font-semibold text-base " >
                                <div>
                                    {order[0].order.name && (<span>• {order[0].order.name}</span>)} • Mesa:  {order[0].order.table}
                                </div>

                            </DialogDescription>
                        </DialogHeader>

                        {
                            order.map(item => (
                                <section key={item.id} >
                                    <div className="w-full flex flex-row items-start  gap-3" >

                                        <Avatar className="" >
                                            {/* <AvatarImage src={`${fileURL}/${item.product.banner}`} alt="@shadcn" /> */}
                                            <AvatarImage src={item.product.banner} alt="@shadcn" />

                                        </Avatar>

                                        <div>
                                            <div className="flex flex-col" >
                                                <span><b>{item.product.name}</b> </span>
                                                <span className="text-sm font-medium text-slate-600" >Qtd: {item.amount} - R$ {parseFloat(item.product.price)}<span className="text-xs text-slate-600" > (valor por unidade)</span></span>
                                            </div>
                                            <DialogDescription>
                                                {item.product.description}
                                            </DialogDescription>
                                        </div>

                                    </div>

                                </section>
                            ))
                        }



                        <DialogFooter  >
                            <div className=" w-full flex flex-row justify-between items-center" >

                                <h3 className="text-red-600 font-semibold" >Valor total: R$ {calculateTotalOrder(order)} </h3>
                                <Button onClick={handleFinishOrder} >Concluir pedido</Button>
                            </div>

                        </DialogFooter>
                    </DialogContent>
               
            </Dialog>

        
    )
}