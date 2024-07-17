import React, { useState } from 'react';

export default function Subtrack() {

    var [x,setx]=useState();

        const fetchApi = async()=>{
            const url=`http://localhost:8080/sub`;
            const response = await fetch(url,{method:"GET",credentials:'include',headers:{"Content-type": "application/json"}});
            const resJson = await response.json();
            // console.log(resJson);
            setx(resJson.data);
        }
        fetchApi();

  return (
    <div>
      <h1>{x}</h1>
    </div>
  )
}
