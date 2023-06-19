import {createContext, useEffect, useState} from "react";

const CategoryContext = createContext();
const CategoryProvider = ({children}) => {
    const [bookCategories, setBookCategories] = useState([])
    const getCategories = async () => {
        try{
            const response = await fetch("/api/categories");
            const {categories} = await response.json();
            setBookCategories((bookCategories) => {
                return categories;
            })
        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(() => {
        getCategories()
    },[])
    return <CategoryContext.Provider value={{bookCategories}}>{children}</CategoryContext.Provider>
}

export {CategoryContext, CategoryProvider}