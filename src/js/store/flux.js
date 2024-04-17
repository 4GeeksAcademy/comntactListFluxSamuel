const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts:[],
			contacto:{},
			
		},
		actions: {
		
			createAgenda: () =>{
				fetch('https://playground.4geeks.com/contact/agendas/jose-agenda',{
					method:'POST',
					headers:{
						'Content-Type' : 'application/json'
					},
				
			})
				.then(Response => Response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error parcero', error))

			},

			createContact: (name, phoneNumber, emailAddress, streetAddress) =>{
				fetch('https://playground.4geeks.com/contact/agendas/jose-agenda/contacts',{
					method:'POST',
					headers:{
						'Content-Type' : 'application/json'
					},
					body : JSON.stringify({
						"name": name,
						"phone": phoneNumber,
						"email": emailAddress,
						 "address": streetAddress,
						 
					   }),
				
			})
				.then(Response => Response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error parcero', error))

			},
			getContacts : ()=>{
				fetch('https://playground.4geeks.com/contact/agendas/jose-agenda/contacts')
				.then(response => response.json())
				.then(data => {
					setStore({Contacts: data.contacts})
					console.log(data)
				})
				.catch(error => console.log('error:', error));
			},

			getSingleContact: (id)=>{
				fetch(`https://playground.4geeks.com/contact/agendas/jose-agenda/contacts/${id}`,{
					method:"GET",
				})
				.then(response => response.json())
				.then(data => 
					setStore({ contacto:data})
				)
				.catch(error => console.log('error:', error));
			}, 

			editContact: (name, emailAddress,phoneNumber, streetAddress, id)=>{
				fetch(`https://playground.4geeks.com/contact/agendas/jose-agenda/contacts/${id}`, {
					method:'PUT',
					headers:{
						'Content-Type' : 'application/json'
					},
					body : JSON.stringify({
					 "name": name,
					 "phone":phoneNumber,
                      "email": emailAddress,
                      "address":streetAddress,
                      
					}),
				})
				.then(Response => Response.json())
				.then(data => console.log(data))
				.catch(error => console.log('Error parcero', error))

			},
			deleteContact : (id)=>{
				fetch(`https://playground.4geeks.com/contact/agendas/jose-agenda/contacts/${id}`,{
					method:'DELETE',
				})
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log("eror parce", error))

			},

		}
	};
};

export default getState;