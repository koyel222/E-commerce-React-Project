import React, { createContext } from 'react'
import all_product from "../Components/Assets/all_product"



export const ShopContex=createContext(null);
const ShopContexProvider=(props)=>{
    const contexValue={all_product};

    return (
        <ShopContex.Provider value={contexValue}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider;