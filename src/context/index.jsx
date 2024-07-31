import { useState, useEffect, createContext } from "react";

export const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    const [searchItem, setSearchItem] = useState('');
    const [searchItemByCategory, setSearchItemByCategory] = useState('');

    const [order, setOrder] = useState([]);

    const openDetailProduct = () => setIsProductDetailOpen(true);
    const closeDetailProduct = () => setIsProductDetailOpen(false);

    const openCheckOut = () => setIsCheckOutOpen(true);
    const closeCheckOut = () => setIsCheckOutOpen(false);

    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error));
    },[]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchItemByCategory) => {
        return items?.filter((item) => item.category.toLowerCase().includes(searchItemByCategory.toLowerCase()));
    }

    const filterBy = (searchType, items, searchItem, searchItemByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchItem);
        }

        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchItemByCategory);
        }

        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchItemByCategory).filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()));
        }

        if(!searchType){
            return items;
        }
    }

    useEffect(() => {
        if(searchItem && searchItemByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchItem, searchItemByCategory));
        if(searchItem && !searchItemByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchItem, searchItemByCategory));
        if(!searchItem && searchItemByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchItem, searchItemByCategory));
        if(!searchItem && !searchItemByCategory) setFilteredItems(filterBy(null, items, searchItem, searchItemByCategory));
    },[items, searchItem, searchItemByCategory]);

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
            setOrder,
            items,
            setItems,
            searchItem,
            setSearchItem,
            filteredItems,
            searchItemByCategory,
            setSearchItemByCategory
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}