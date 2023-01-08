import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from "./components/form/Form.js";
import Registered from "./components/registered/Registered.js";
import Title from "./components/title/Title.js"
import { UserProvider } from "./context/UserContext.js";


function App() {

  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Title />
          <Routes>
            <Route path= "/" element={<Form />} />
            <Route path="/registered" element={<Registered />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
