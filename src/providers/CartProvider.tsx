import { createContext, useContext, useState } from "react";
interface IContext {
    order: IOrder[],
    setOrder: React.Dispatch<React.SetStateAction<IOrder[]>>,
    handleAddCart: (price: number, title: string, description: string) => void,
    handleRemoveItemCart: (title:string) => void
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
    const cartJson = JSON.parse(localStorage.getItem("cart") || '[]');
    const [order, setOrder] = useState<IOrder[]>(cartJson);

    function handleAddCart(price: number, title: string, description: string) {
        const newObj = { price, title, description }
        setOrder([...order, newObj]);
        const priceF = cartJson.reduce((previous: any, current: any) => previous + current.price, 0)
        localStorage.setItem("finalPrice", priceF);
        localStorage.setItem("cart", JSON.stringify(order));

    }

    function handleRemoveItemCart(title: string){
        const arrRemoved = order.filter((val) => val.title !== title)
        return arrRemoved;
    }
    return (
        <CartContext.Provider value={{ order, setOrder, handleAddCart, handleRemoveItemCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);