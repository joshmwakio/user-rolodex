import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "../../images/Logo.svg";
export const Navigation=()=>{
    return(
        <div className="flex px-32 justify-between w-full py-5 items-center">
        <div className="flex items-center">
            <Logo className="w-11 h-11"/>
            <h2 className=" ml-4 font-Gilroy font-semibold text-lg text-Indepedence text-opacity-80">The Rolodex</h2>
        </div>   
        <div className="flex items-center space-x-9 font-semibold font-Gilroy text-sm text-Indepedence text-opacity-80">
            <Link to="#">Home</Link>
            <Link className=" text-Carolina-Blue" to="#">Bloggers</Link>
            <Link to="#">Posts</Link>
            <Link to="#">Albums</Link>
            <Link to="#">Login</Link>
        </div>  
        </div>
    );


}