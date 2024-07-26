import { useState, createContext } from "react";

export const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    const [order, setOrder] = useState([]);

    const openDetailProduct = () => setIsProductDetailOpen(true);
    const closeDetailProduct = () => setIsProductDetailOpen(false);

    const openCheckOut = () => setIsCheckOutOpen(true);
    const closeCheckOut = () => setIsCheckOutOpen(false);

    return (
        <ShoppingCarContext.Provider value={{
            count, 
            setCount, 
            openDetailProduct, 
            closeDetailProduct, 
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutOpen,
            openCheckOut,
            closeCheckOut,
            order, 
            setOrder
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}