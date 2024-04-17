import React, { useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/editForm.css";

export const EditForm = () => {
	const { store, actions } = useContext(Context);

	const[name, setname]= useState("Nombre");
	const[emailAddress, setEmailAddress]= useState("Email");
	const[phoneNumber, setPhoneNumber]= useState("Telefono");
	const[streetAddress, setStreetAddress]= useState("Direccion");
	const {id} = useParams(); 
	console.log(id);


 	useEffect(()=>{
		actions.getSingleContact(id)
	},[])  
	useEffect (()=>{
		setname(store.contacto.name)
		setEmailAddress(store.contacto.email)
		setPhoneNumber(store.contacto.phone)
		setStreetAddress(store.contacto.address)
	},[store.contacto])


	const handleSubmit = e =>{
		e.preventDefault();
		actions.editContact(name, emailAddress, phoneNumber, streetAddress, id);
		setname("");
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
					onChange={e =>setname(e.target.value)}
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
				<div className="mb-3">
 				 	<button type="submit" className="btns">Submit</button>
					<Link to="/">
						<button className="btns mx-3" >Back home</button>
					</Link>
				</div>
			</form>

			
		</div>
	);
}