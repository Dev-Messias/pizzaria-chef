"use client"

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { OrderContext } from "@/providers/order";


export function ModalOrder() {
    const { isOpen, onRequestClose, order } = use(OrderContext);

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onRequestClose}   >
                <DialogContent  >
                    <DialogHeader>
                        <DialogTitle className="font-bold text-lg" >Detalhes do pedido</DialogTitle>
                        <DialogDescription className=" text-green-600 font-semibold text-base " >
                            {order[0].order.name && (<span>• {order[0].order.name}</span>)} • Mesa:  {order[0].order.table}
                        </DialogDescription>
                    </DialogHeader>

                    {
                        order.map(item => (
                            <section key={item.id} >
                                <span>{item.amount} - <b>{item.product.name}:</b> </span>
                                <DialogDescription>
                                    {item.product.description}
                                </DialogDescription>
                            </section>
                        ))
                    }



                    <DialogFooter>
                        <Button>Concluir pedido</Button>
                    </DialogFooter>
                </DialogContent>

            </Dialog>

        </>
    )
}