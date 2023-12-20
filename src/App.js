import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  const[formData,setFormData]=useState({ firstName:"",lastName:"",email:"" ,country:"India",address:"",city:"",
  state:"Up",postalcode:"",comments:"",candidates:"",offers:"",radiobutton:""})
  
  function changeHandler(event){
    const{name,value, checked,type}=event.target;
    setFormData((prev) =>( {...prev , [name] : type === "checkbox"  ?  checked:value }))

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("form data is printed into console");
    console.log(formData);
  }
  return (
    <div className="App" >

      <form onSubmit={submitHandler}>

        <label>First Name : </label>
        <input 
        placeholder='First Name' 
        type='text' 
        id="firstName"
        name="firstName"
        onChange={changeHandler}
        value={formData.name}
        ></input><br/>

        <label>Last Name : </label>
        <input 
        placeholder='Last Name' 
        type='text' 
        id="lastName"
        name="lastName"
        onChange={changeHandler}
        value={formData.lastName}
        ></input><br/>

        <label>Email : </label>
        <input 
        placeholder='Email' 
        type='email' 
        onChange={changeHandler}
        id="email"
        name='email'
        value={formData.email}
        ></input><br/>

        <label>Country : </label>
        <select 
        name='country'
        id="country"
        value={formData.country}
        onChange={changeHandler}>
          <option>India</option>
          <option>China</option>
          <option>USA</option>
          <option>Japan</option>
        </select><br/>

        <label> Address : </label>
        <input 
        placeholder='Address' 
        type='text' 
        onChange={changeHandler}
        name='address'
        id="address"
        value={formData.address}
        ></input><br/>

        <label>City : </label>
        <input 
        placeholder='City' 
        type='text' 
        onChange={changeHandler}
        name='city'
        id='city'
        value={formData.city}
        ></input><br/>

        <label>State/Province : </label>
        <input 
        placeholder='State/Province' 
        type='text' 
        onChange={changeHandler}
        name='state'
        id="state"
        value={formData.state}
        ></input><br/>

        <label>Postal Code : </label>
        <input 
        placeholder='247556' 
        type='text' 
        onChange={changeHandler}
        name='postalcode'
        id="postalcode"
        value={formData.postalcode}
        ></input><br/>

        <br/>
        <br/>

        <fieldset>
          <legend>Email by </legend>

          <input type='checkbox' name='comments' id='comments' onChange={changeHandler} checked={formData.comments} ></input>
          <label> comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>

          <input type='checkbox' name='candidates' id='candidates' onChange={changeHandler} checked={formData.candidates} ></input>
          <label> candidates</label>
          <p>Get notified when a candidate applies for a job.</p>

          <input type='checkbox' name="offers" id='offers' onChange={changeHandler} checked={formData.offers} ></input>
          <label> Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </fieldset>

        <br/>
        <br/>
        
        <div className='no-name'>
          <legend>These are delivered via SMS to your mobile phone.</legend>

          <div>
            <input type='radio' name='radiobutton' id='everything' onChange={changeHandler} value="everything"/>
            <label>Everything</label>
          </div>

          <div>
            <input type='radio' name='radiobutton' id='Sameasemail' onChange={changeHandler} value=" Same as email"/>
            <label> Same as email</label>
          </div>

          <div>
            <input type='radio' name="radiobutton" id="pushnotification" onChange={changeHandler} value="no push Notification"/>
            <label>No Push Notifications</label>
          </div>
        </div>

        <br/>
        <br/>

        <button>Submit</button>
        

      </form>
    </div>
  );
}

export default App;
