import React, {useContext} from 'react';
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";


const Card = (props) => {
	const { store, actions } = useContext(Context);
    const handleDelete =()=>{
        actions.deleteContact(props.id);
    }

return(
<div className="card">
    <div className="container card-body">
        <div className='props'>
            <p className='nombre'>{props.nombre}</p>
            <p > <i className=" bi bi-envelope ">  {props.email}</i></p>
            <p > <i className="bi bi-telephone "> {props.phoneNumber} </i></p>
            <p > <i className="bi bi-geo-alt ">  {props.address} </i></p>
        </div>
        <div className='imagen'>
            <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."></img>
        </div>
    </div>
    <div className='botones'>
            <Link to={`/EditForm/${props.id}`}>
                <button className='btn-editar mx-3' ><i className="bi bi-pencil">Editar</i></button>
            </Link>
            <button className="btn-eliminar mb-3"  onClick={()=>{handleDelete()}} ><i class="bi bi-trash3">Eliminar</i></button>
        </div>

</div>

)};


export default Card;