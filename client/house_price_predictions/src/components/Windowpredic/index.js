import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import React from 'react'
import Axios from 'axios'
import './index.scss'
function Prediction() {
    
    const [price,setprice]=useState()
    const [locations, setLocations] = useState([]); // Initialize the state variable
    const [formData, setFormData] = useState({
      
        location: '',
        total_sqft: '',
        bath: '', // Initialize 'bath' with 0
        bhk: '',  // Initialize 'bhk' with 0
      
      });
    useEffect(() => {
        // Fetch the data and set it in the state variable
        Axios.get('http://127.0.0.1:5000/get_locations_names')
            .then((res) => {
                const data_location = res.data.locations;
                setLocations(data_location); // Set the data in the state variable
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        
        
        // Create the payload for the POST request
        const payload = {
          total_sqft: Number(formData.total_sqft),
          location: formData.location,
          bath: parseInt(formData.bath),
          bhk: parseInt(formData.bhk),
        }
        
        
        Axios.post('http://127.0.0.1:5000/get_estimated_price', payload)
        .then((response) => {
          // Handle the response as needed
           setprice(response.data.price)
          console.log('POST request successful', response);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error sending POST request', error);
        });
    };
    return (

        <div className='CONTAINER'>
      <form onSubmit={handleSubmit} method="POST">
        <label>
          Location:
          <select
            className='Locchoices'
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Total square foot:
          <input
            type='text'
            name="total_sqft"
            value={formData.total_sqft}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bathroom:
          <input
            type='text'
            name="bath"
            value={formData.bath}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bedroom:
          <input
            type='text'
            name="bhk"
            value={formData.bhk}
            onChange={handleInputChange}
          />
        </label>
        {price ?<h2>
         the price is {price}
        </h2>:''}
        <br />
        <input type='submit' value='Envoyer' className='btn' />
        
       
      </form>
    </div>
  );
}

export default Prediction
