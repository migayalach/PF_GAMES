import "./navbar.styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function Navbar() {
    return (
      <div className="search">
        {/* <form className="search-box">
          <input  placeholder="Buqueda" />
          <button>Buscar</button>
        </form> */}
        <SearchBar></SearchBar>
      </div>
    );
  }
  
  export default Navbar; 
  