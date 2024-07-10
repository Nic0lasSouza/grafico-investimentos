import Cards from "./components/Cards/card";
import Logo from "./components/Logo/logo";
import NavBar from "./components/NavBar/Navbar";
import SideBar from "./components/SideBar/sideBar";

function App() {
  return (
    <div className="App">
      <Logo/>
      <NavBar/>
      <Cards/>
      <SideBar/>
    </div>
  );
}

export default App;
