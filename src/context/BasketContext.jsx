import React, { createContext, useState } from 'react'

export const BASKET = createContext(null)

function BasketContext({ children }) {
    const [sebet, setSebet] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    console.log(sebet)
    
  const [productColor, setProductColor] = useState('')
  const [sizeButton, setSizeButton] = useState('')
    const totalAllAmount = sebet.reduce((total, item) => total + item.count * ((item.price * (100 - item.discount)) / 100), 0)

    function addToBasket(id, img, name, price, discount, size, color, count = 1) {
        console.log(id, size, color)
        const discountedPrice = (price * (100 - discount)) / 100
        const totalPrice = discountedPrice * count
        if (sebet.some(item => !(item.id == id && item.size == size && item.color == color))) {
            setSebet(sebet.map(
                item => item.id == id && item.size == size && item.color == color ? 
                { ...item, count: item.count + count, totalPrice: (item.count + count) * discountedPrice } 
                : item
            ))
        }
        else (
            setSebet([...sebet, {
                id, img, name, price, discount, size, color, count, totalPrice
            }]) 
        )
        const newCount = sebet.reduce((total, item) => total + item.count, count)
        setTotalCount(newCount)
        // setProductColor('')
        // setSizeButton('')

    }
    // console.log(sebet)

    function removeProduct(id) {
        const newSebet = sebet.filter(item => item.id != id)
        setSebet(newSebet)
    }

    return (
        <BASKET.Provider
            value={{
                sebet, setSebet, addToBasket, removeProduct, totalAllAmount, totalCount,
                sizeButton, setSizeButton,
                productColor, setProductColor
            }}
        >
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext