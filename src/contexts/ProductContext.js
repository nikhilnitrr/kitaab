import {createContext, useEffect, useState} from "react";

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [bookList, setBookList] = useState([]);
    const getProducts = async () => {
        try{
            const response = await fetch("/api/products");
            const {products} = await response.json();
            setBookList((bookList) => {
                return products;
            })
        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    return <ProductContext.Provider value={{bookList, setBookList}}>{children}</ProductContext.Provider>
}

export {ProductContext, ProductProvider};