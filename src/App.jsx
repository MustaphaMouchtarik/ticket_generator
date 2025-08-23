import './App.css';
import UploadCase from './UploadCase'
import React,{ useState } from 'react';
function App() {
  const [generated,setGenerated] = useState(false)
  function Generate(){
    setGenerated=true;
    console.log("aaaaaaaaaaaazzzzzzzzzzzz")
    console.log(generated)
  }
  if(generated){
    return(
      <button>zaba</button>
    )
  }
  else{
    return (
      <div>
        <img id='logo' src='/images/logo-full.svg' style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "20%",
          height: "auto"
        }} />
  
          <img src="/images/pat1.svg" alt="Pattern 1" 
          style={{ position: 'fixed', bottom: 0, left: 0, width: '50%' ,zIndex: -1}} />
          <img src="/images/pat0.svg" alt="Pattern 2" 
          style={{ position: 'fixed', top: 20, right: 0, width: '25%' ,zIndex: -1}} />
        <div id='container'>
          <h1 style={{color: "white",fontSize: "3.4rem"}}
          >Your Journey To coding Conf 2025 Starts Here!</h1>
          <h3 style={{color:"hsl(245, 15%, 58%)",fontweight:"italic"}}>Secure you spot at next year's biggest coding conference.</h3>
          <div id="cont">
            <section id="sub">
              <p className='input-desc'>Upload Avatar</p>
              <UploadCase></UploadCase>
              <p className='input-desc'>Full Name</p>
              <input type='textarea'></input>
              <p className='input-desc'>Email Address</p>
              <input placeholder='exemple@email.com' type="email" id="email" pattern=".+@example\.com"></input>
              <p className='input-desc'>Github Username</p>
              <input type='textarea' placeholder='@yourusername'></input>
              <button id='submiti' onClick={Generate} >Generate My Ticket</button>
            </section>
          </div>
        
        
        </div>
      
      
      
      
      
      
      
      </div>
      
    )
  }

  
}

export default App;
