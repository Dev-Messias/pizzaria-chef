import { OrderItemProps } from "@/providers/order";

export function calculateTotalOrder(orders: OrderItemProps[]){

    //percorrendo lista e somando os valores
    return orders.reduce((total, item) => {
        const itemTotal = parseFloat(item.product.price) * item.amount; //volor total de um produto
        return total + itemTotal
    }, 0)

}