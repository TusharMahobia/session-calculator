import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Addition from "./pages/Addtion";
import Subtrack from "./pages/Subtrack";
import Multiplication from "./pages/Multiplication";
import Divison from "./pages/Divison";

export default function App() {

  var [x, setx] = useState();
  var [z, setz] = useState();
  var [y, sety] = useState();

  function check() {
    var a = { first: x, second: z };
    const fetchApi = async () => {
      const url = `http://localhost:8080/input`;
      const response = await fetch(url, { method: "POST", credentials: 'include', headers: { "Content-type": "application/json" }, body: JSON.stringify(a) });
      const resJson = await response.json();
      // console.log(resJson);
      sety(resJson.data);
    }
    fetchApi();
  }

  return (<>
    <BrowserRouter>
      <div>
        <input type="text" placeholder="text 1" onChange={(event) => { setx(event.target.value) }} />
        <input type="text" placeholder="text 2" onChange={(event) => { setz(event.target.value) }} />
        <button onClick={check}>check</button>
        <h1>{y}</h1>
      </div>
      <Link to="/"><button>Index</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/add"><button>Addition</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/sub"><button>Subtraction</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/multi"><button>Multiplication</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/div"><button>Division</button></Link>
      <Routes>
        <Route path='/add' element={<Addition />} />
        <Route path='/sub' element={<Subtrack />} />
        <Route path='/multi' element={<Multiplication />} />
        <Route path='/div' element={<Divison />} />
      </Routes>
    </BrowserRouter>
  </>)
}
