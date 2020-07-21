import React from "react";

export default(props) =>{
    const cource = props.element;
    return ( 
         <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0" style={{width:"300px"}}>
            <h4 className="font-bold h-40 overflow-y-hidden" >
                <a href={cource.url} target="_blank">{cource.title}</a>
                </h4>
            <div className="text-center">
                <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progreso: {parseInt(cource.progress)}%</span>
            </div>
        </div>
    );
}