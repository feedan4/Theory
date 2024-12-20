import React, { createContext, useState } from 'react'

export const BASKET = createContext(null)

function BasketContext({ children }) {
    const [sebet, setSebet] = useState([])
    const totalAllAmount = sebet.reduce((total, item) => total + item.count * ((item.price * (100 - item.discount)) / 100), 0)

    function addToBasket(id, img, name, price, discount, size, color, count = 1) {
        const discountedPrice = (price * (100 - discount)) / 100
        const totalPrice = discountedPrice * count
        if (sebet.some(item => item.id == id )) {
            setSebet(sebet.map(
                item => item.id == id ? { ...item, count: item.count + count, totalPrice: (item.count + count) * discountedPrice } : item
            ))
        }
        else (
            setSebet([...sebet, {
                id, img, name, price, discount, size, color, count, totalPrice
            }])
        )
    }

    function removeProduct(id) {
        const newSebet = sebet.filter(item => item.id != id)
        setSebet(newSebet)
    }

    return (
        <BASKET.Provider
            value={{
                sebet, setSebet, addToBasket, removeProduct, totalAllAmount
            }}
        >
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext