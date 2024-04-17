import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.getContacts();
		console.log(store.Contacts)
	},[]);


	return (
		<div className="text-center mt-5">
			{Array.isArray(store.Contacts) && store.Contacts.map((item, index) => {
				return (
					<Card 
						nombre={item.name}
						email={item.email}
						phoneNumber={item.phone}
						address={item.address}
						id={item.id}
						key={index} />
				);
			})}
		</div>
	);}