import React from "react";
import CallIcon from '../../images/icons8_call_female 1.png';
import MessageIcon from '../../images/icons8_important_mail 1.png';
import LocationIcon from '../../images/icons8_next_location 1.png'
export const Card=({name,username,email,image})=>{
    return(
        <div className="flex flex-col px-4 py-5 w-64 h-64 cursor-pointer rounded-3xl bg-white shadow-default transition duration-500 ease-in-out transform hover:scale-110">
            <div>
                <span className="py-2 px-4 rounded-full text-Carolina-Blue font-Roboto text-xs bg-Carolina-Blue bg-opacity-10">{username}</span>
            </div>

            <div className="mt-4 flex flex-col justify-center items-center text-Indepedence s">
                <img className=" w-20 h-20 object-cover rounded-full"
                    src={image}
                    alt="Avatar of Tailwind CSS Design"
                  />
                <h1 className="text-base font-semibold font-Gilroy mt-5">{name}</h1>
                <p className="mt-1 font-Roboto text-sm">{email}</p>
                <div className=" flex flex-row mt-3 justify-between space-x-4 ">
                    <img className="w-6 h-6 object-cover" src={CallIcon}/>
                    <img className="w-6 h-6 object-cover" src={LocationIcon}/>
                    <img className="w-6 h-6 object-cover" src={MessageIcon}/>
                </div>
            </div>
          
        </div>
    )
}