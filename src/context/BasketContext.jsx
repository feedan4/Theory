import React, { createContext, useEffect, useState } from 'react';

export const BASKET = createContext(null);

function BasketContext({ children }) {
    const [sebet, setSebet] = useState(() => {
        const savedSebet = localStorage.getItem("sebet");
        return savedSebet ? JSON.parse(savedSebet) : [];
    });

    const [totalCount, setTotalCount] = useState(() => {
        const savedSebet = localStorage.getItem("sebet");
        if (savedSebet) {
            const parsedSebet = JSON.parse(savedSebet);
            return parsedSebet.reduce((total, item) => total + item.count, 0);
        }
        return 0;
    });

    const totalAllAmount = sebet.reduce((total, item) => total + item.count * ((item.price * (100 - item.discount)) / 100), 0)

    useEffect(() => {
        localStorage.setItem("sebet", JSON.stringify(sebet))
    }, [sebet])

    function addToBasket(id, img, name, price, discount, size, color, count = 1) {
        const discountedPrice = (price * (100 - discount)) / 100
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

        const newCount = sebet.reduce((total, item) => total + item.count, 0) + count;
        setTotalCount(newCount)
    }

    function removeProduct(id,size,color) {
        const newSebet = sebet.filter(item => !(item.id === id && item.size === size && item.color === color ))
        setSebet(newSebet)
    }

    return (
        <BASKET.Provider
            value={{
                sebet, setSebet, addToBasket, removeProduct, totalAllAmount, totalCount,
            }}
        >
            {children}
        </BASKET.Provider>
    );
}

export default BasketContext;