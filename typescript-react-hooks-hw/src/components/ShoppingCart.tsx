import React, { FormEvent, useReducer, useState } from 'react'
import shoppingCartReducer from '../reducers/ShoppingCartReducer'
import { ShoppingCartItem, ShoppingCartAction } from '../reducers/ShoppingCartReducer'


const ShoppingCart = () => {
    const [cart, dispatch] = useReducer(shoppingCartReducer, [])

    const [itemInput, setItemInput] = useState("")

    const handleAddItem = (event: FormEvent) => {
        event.preventDefault()
        console.log("Item added successfully!");
        const newItem: ShoppingCartItem = {
            id: Date.now(),
            name: itemInput
        }
        dispatch({type: "ADD_ITEM", payload: newItem})
    }
    const handleRemoveFromCart = (id: number) => {
        console.log("Item deleted successfully!");
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

  return (
    <div>
        <p>Cart: </p>
        <form onSubmit={handleAddItem}>
            <input type='text' autoComplete='off' value={itemInput} onChange={(event) => setItemInput(event.target.value)} />
            <button type='submit'>Add Item</button>
        </form>
        <ul>
            {
                cart.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove Item</button>
                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default ShoppingCart