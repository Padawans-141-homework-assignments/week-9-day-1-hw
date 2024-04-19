import { useState } from 'react'

export default function DBSingleProduct() {

    // creates a state for the data
    const [singleData, setSingleData] = useState([])

    // creates a state for handling the error text
    const [errorText, setErrorText] = useState('')

    // creates a state for deciding if an error happened or not
    const [isError, setIsError] = useState(false)
    
    
    
    const getSingleProduct = async () => {

        // gets the information the user put in the box
        var userInput = document.getElementById("input").value

        // fetches the data
        const res = await fetch(`http://127.0.0.1:5000/products/${userInput}`)

        // if successful
        if(res.ok) {
            // set data to JSON
            const data = await res.json();
            //set state to new data
            setSingleData(data);
            // set this state to false because it was successful
            setIsError(false);
        }
        // if not successful
        else {
            // set the state to 'true' because it error'd out
            setIsError(true);
            // set the state of the error text to this since it error'd
            setErrorText('There was a Problem getting the Product you requested :(');
            console.error("Couldn't get the product :(")
        }

    }

  return (
    <>
    <br/>
    <div id='game-div'>
    <input id='input' className='sp' placeholder='What product ID do you need?'></input>
    {/* Start the function when the button is clicked */}
    <button id='input' onClick={getSingleProduct} className='game-col'>Get Product</button>
    </div>
    <br/>
    <div>
    {/* uses ternary operator to display text depending on if an error happened. */}
    {isError ? <h3 id='game-div'>{errorText}</h3> : Object.entries(singleData).map(([key, value]) => <h3 key={key}>{`${key}: ${value}`}</h3>)}
    </div>
    </>
  )
}
