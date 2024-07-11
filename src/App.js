import Cards from "./components/Cards/card";
import Logo from "./components/Logo/logo";
import NavBar from "./components/NavBar/Navbar";
// import SideBar from "./components/SideBar/sideBar";

function App() {
  const styleCard = { width: '250px', height: '50', marginLeft: "100px" }
  return (
    <div className="App">
      <Logo/>
      <NavBar/>
      {/* <SideBar/> */}
      <Cards nome="Project:" img="/img/AutoDesk.png" style={styleCard}/>
    </div>
  );
}

export default App;
