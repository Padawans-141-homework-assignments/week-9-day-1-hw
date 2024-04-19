import { useState } from 'react'

export default function DBProducts() {

    // state for fetched data
    const [userData, setUserData] = useState([])

    const getDBData = async () => {
        // fetches the data
        const res = await fetch('http://127.0.0.1:5000/products')
        // if its successfull set state to the new data
        if(res.ok) {
            const data = await res.json();
            setUserData(data);
        }
        // if not error out
        else
        {
            console.error("Couldn't get the products :(")
        }
    }

  return (
    <>
    <div id='game-div'>
        {/* Calls the function on click */}
        <button onClick={getDBData}>Get All Users</button>
    </div>
    <div>
        {/* Maps through the data and displays it on screen */}
        {userData.map((user, i) => <h1 key={i}> {user.product_id}. {user.product_name} 
        ${user.product_price} <br/><h3>{user.product_description}</h3></h1>,
        )}
    </div>
    <br/>
    </>
  )
}
