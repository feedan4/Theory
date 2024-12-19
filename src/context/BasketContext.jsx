import React, { createContext, useState } from 'react'

export const BASKET = createContext(null)

function BasketContext({ children }) {
    const [sebet, setSebet] = useState([])

    function addToBasket(id, img, name, price, discount, size, color) {
        setSebet([...sebet, {
            id, img, name, price, discount, size, color
        }])
    }

    return (
        <BASKET.Provider
            value={{
                sebet, setSebet, addToBasket
            }}
        >
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext