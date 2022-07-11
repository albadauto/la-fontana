import { createContext, useState } from "react";
interface IContext {
    finalPrice: number,
    order: IOrder[],
    setOrder: React.Dispatch<React.SetStateAction<IOrder[]>>,
    handleAddCart: (price: number, title: string, description: string) => void
}
interface IOrder{
    price?: number,
    title?: string,
    description?: string
  }
export const CartContext = createContext<IContext>({} as IContext);

interface IProps {
    children?: React.ReactNode
}
export default function CartProvider(props: IProps){
    const [order, setOrder] = useState<IOrder[]>([]);
    const [finalPrice, setFinalPrice] = useState<number>(0);
    function handleAddCart(price: number, title: string, description: string) {
        const newObj = { price, title, description }
        setOrder([...order, newObj])
        setFinalPrice(finalPrice + price);
        console.log(order)

    }
    return (
        <CartContext.Provider value={{finalPrice, order, setOrder, handleAddCart}}>
            {props.children}
        </CartContext.Provider>
    )
}