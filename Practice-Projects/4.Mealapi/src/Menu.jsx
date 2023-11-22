import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './style.css'



function Menu() {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => {
            setItems(res.data.meals)
        }).catch((err) => {
            console.log(err);
        })
    }, []);


 const itemsList = items.map(({strMeal,strMealThumb, idMeal}) => {
    return (
        
        <section className="card">
            <img src={strMealThumb}  />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
            
        </section>
       
      )
  })
  return <div className="items-container">{itemsList}</div>
}

export default Menu
