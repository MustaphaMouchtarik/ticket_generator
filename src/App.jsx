import './App.css';
import fonta from  '/fonts/static/Inconsolata-Bold.ttf'
import UploadCase from './UploadCase'
function App() {
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
        style={{ position: 'absolute', bottom: 0, left: 0, width: '50%' }} />
        <img src="/images/pat0.svg" alt="Pattern 2" 
        style={{ position: 'absolute', top: 20, right: 0, width: '25%' }} />
      <div id='container'>
        <h1 style={{color: "white",fontSize: "3.4rem"}}
        >Your Journey To coding Conf 2025 Starts Here!</h1>
        <h3 style={{color:"hsl(245, 15%, 58%)",fontweight:"italic"}}>Secure you spot at next year's biggest coding conference.</h3>
        <section id="sub">
          <p>Upload Avatar</p>
          <div id="upload case">
            <UploadCase></UploadCase>
          </div>
        </section>
      
      
      </div>
    
    
    
    
    
    
    
    </div>
    
  )
}

export default App;
