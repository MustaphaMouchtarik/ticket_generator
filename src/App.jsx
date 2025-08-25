import './App.css';
import AvatarUploader from './UploadCase'
import React,{ useState } from 'react';
import Ticket from './ticket'
function App() {
  const [generated,setGenerated] = useState(true)
  const [formData, setFormData] = useState({
    picture: "/images/image-avatar.jpg",
    name: "Mustapha",
    email: "mustapha.mouchtarik2006@gmail.com",
    username: "Mouchta",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  function submit(){
    if(!formData.picture){
      window.alert("please submit an avatar before generating")
    }
    else{
      setGenerated(true)
    }

  }
  
  if(generated){
    return(
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


        <div id='container' style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <h1 style={{color: "white",fontSize: "3.4rem"}}>
            Congrats ,<span className='gradient-text' > {formData.username}!</span> Your ticket is ready.
          </h1>
          <div style={{maxWidth:"400px"}}>
            <h3 style={{color:"hsl(245, 15%, 58%)",fontweight:"italic"}}>We've emailed your ticket to<span style={{color:"#ff7e5f"}}> {formData.email} </span>
              and will send updates in the run up to the event.</h3>
          </div>
          <div id="cont" style={{marginTop:"5rem",marginBottom:"20rem",height:"280",width:"600"}}>
            <Ticket name={formData.name} picture={formData.picture}></Ticket>
          </div>
        </div>


    </div>
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
              <AvatarUploader onUpload={(img) => setFormData((p) => ({ ...p, picture: img }))}></AvatarUploader>
              <p className='input-desc'>Full Name</p>
              <input id='name' type='text' value={formData.name} onChange={handleChange}></input>
              <p className='input-desc'>Email Address</p>
              <input id='email' placeholder='exemple@email.com' type="email" onChange={handleChange}></input>
              <p className='input-desc'>Github Username</p>
              <input id='username' type='text' placeholder='@yourusername' onChange={handleChange}></input>
              <button id='submiti' onClick={submit} >Generate My Ticket</button>
            </section>
          </div>
        </div>
      </div>
    )
  } 
}

export default App;
