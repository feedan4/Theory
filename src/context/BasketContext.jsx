import React, { createContext, useEffect, useState } from 'react'

export const BASKET = createContext(null)

function BasketContext({ children }) {
    const [sebet, setSebet] = useState(() => {
        const savedSebet = localStorage.getItem("sebet")
        return savedSebet ? JSON.parse(savedSebet) : []
    })

    const [totalCount, setTotalCount] = useState(() => {
        const savedSebet = localStorage.getItem("sebet")
        if (savedSebet) {
            const parsedSebet = JSON.parse(savedSebet)
            return parsedSebet.reduce((total, item) => total + item.count, 0)
        }
        return 0
    })

    const totalAllAmount = sebet.reduce((total, item) => total + item.count * ((item.price - item.discount)), 0)
    const [countOption, setcountOption] = useState("")

    useEffect(() => {
        localStorage.setItem("sebet", JSON.stringify(sebet))
    }, [sebet])

    function addToBasket(id, img, name, price, discount, size, color, count = 1) {
        const discountedPrice = (price - discount)
        const totalPrice = discountedPrice * count

        if (sebet.find(item => item.id === id && item.size === size && item.color === color)) {
            setSebet(sebet.map(item =>
                item.id === id && item.size === size && item.color === color
                    ? { ...item, count: item.count + count, totalPrice: (item.count + count) * discountedPrice }
                    : item
            ))
        } else {
            setSebet([...sebet, {
                id, img, name, price, discount, size, color, count, totalPrice
            }])
        }

        const newCount = sebet.reduce((total, item) => total + item.count, 0) + count
        setTotalCount(newCount)
    }

    function newOptionCount(id, size, color, countOption) {
        setSebet(sebet.map(item => {
            if (item.id === id && item.size === size && item.color === color) {
                const discountedPrice = item.price - item.discount
                return {
                    ...item,
                    count: countOption,
                    totalPrice: discountedPrice * countOption
                }
            }
            return item
        }))

        const newTotalCount = sebet.reduce((total, item) =>
            total + (item.id === id && item.size === size && item.color === color ? countOption : item.count),
            0)
        setTotalCount(newTotalCount)

    }

    function removeProduct(id, size, color) {
        const newSebet = sebet.filter(item => !(item.id === id && item.size === size && item.color === color))
        setSebet(newSebet)
        setTotalCount(newSebet.length)
        localStorage.setItem('sebet', JSON.stringify(newSebet))
    }

    return (
        <BASKET.Provider
            value={{
                sebet, setSebet, addToBasket, removeProduct,
                totalAllAmount, totalCount,
                countOption, setcountOption, newOptionCount
            }}
        >
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext