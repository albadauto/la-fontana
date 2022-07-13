import React, { useEffect } from 'react'
import { useCart } from '../../providers/CartProvider'

export default function MyOrders() {
    useEffect(() => {
       console.log(localStorage.getItem("finalPrice"))
    }, [])
    return (
        <div>MyOrders</div>
    )
}
