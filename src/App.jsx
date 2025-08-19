import './App.css';

function App() {
  return (
    <div>
      <img id='logo' src='/images/logo-full.svg' style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "80%",
        height: "auto"
      }} />

      <img src="/images/pat1.svg" alt="Pattern 1" style={{ position: 'absolute', bottom: 0, left: 0, width: '50%' }} />
      <img src="/images/pat0.svg" alt="Pattern 2" style={{ position: 'absolute', top: 20, right: 0, width: '25%' }} />
    </div>
  )
}

export default App;
