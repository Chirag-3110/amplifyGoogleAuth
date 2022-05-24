import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import './App.css';
function App() {
  async function checkUser(){
    const user=await Auth.currentAuthenticatedUser()
    console.log(user);
  }
  return (
    <div className="App">
      <div>
        <button
          onClick={()=>Auth.federatedSignIn({provider:"Google"})}
        >
          Login with google
        </button>
        <button
           onClick={()=>Auth.federatedSignIn()}
        >
          Login
        </button>
        <button
           onClick={()=>checkUser()}
        >
          check for user
        </button>
      </div>
    </div>
  );
}

export default App;
