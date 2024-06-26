import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const[name, setName]= useState("");
	const[emailAddress, setEmailAddress]= useState("");
	const[phoneNumber, setPhoneNumber]= useState("")
	const[streetAddress, setStreetAddress]= useState("")

	const handleSubmit = e =>{
		e.preventDefault();
		
		actions.createContact(name, emailAddress, phoneNumber, streetAddress );
		setName("");
		setEmailAddress("");
		setStreetAddress("");
		setPhoneNumber("");
	}
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
  				<div className="mb-3">
    				<label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    				<input 
					type="text" 
					className="form-control"
					value={name}
					onChange={e =>setName(e.target.value)}
					placeholder="Samu Marrero"
					
					/>
  				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
					<input 
					type="email" 
					className="form-control" 
					value={emailAddress}
					onChange = {e => setEmailAddress(e.target.value)}
					placeholder="Email"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="direccion" className="form-label">Phone Number</label>
					<input
					 type="text" 
					 className="form-control"
					 value={phoneNumber}
					onChange = {e => setPhoneNumber(e.target.value)}
					placeholder="Phone Number"
					 />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
					<input 
					type="text" 
					className="form-control" 
					value={streetAddress}
					onChange={e => setStreetAddress(e.target.value)}
					placeholder="Address"
					/>
				</div>
  
 				 <button type="submit" className="btns">Submit</button>
				  <Link to="/">
				<button onClick={()=> console.log(name)} className="btns mx-3 mb-3">Back home</button>
			</Link>
			</form>

			
			
		</div>
	);
}
