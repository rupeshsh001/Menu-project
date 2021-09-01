import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
        return curElem.category
    })
  ),"All"
]
console.log(uniqueList)

const Resturant = () => {
    const [MenuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList)
    
    console.log(setMenuList)

    const filterItem=(category)=>{

        if(category==="All"){
            setMenuData(Menu);
            return
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
          });
      
          setMenuData(updatedList);
    };

    return (
        <>  
            <NavBar filterItem={filterItem} menuList={menuList}/>
            <MenuCard MenuData={MenuData}/>
        </>
    )
}

export default Resturant
