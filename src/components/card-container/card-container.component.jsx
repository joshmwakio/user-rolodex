import React from "react";
import { Card } from "../Card/card.component";
export const CardContainer=({members,images})=>{
    return(
        <div className="px-8 flex flex-col items-center my-3 mt-11">
            <div className="grid grid-cols-4 gap-x-5 gap-y-5">
                {
                    
                    members.map(member=>(
                   
                     <Card key={member.id} name={member.name} username={member.username} email={member.email}
                         image={images.results[parseInt(member.id)-1].urls.full}
                     />
                     
                ))
                }
                {
                    console.log(images)
                }
            </div>
         
        </div>
    )
}