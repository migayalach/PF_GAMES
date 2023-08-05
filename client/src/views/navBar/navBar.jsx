import "./navbar.styles.css";


function Navbar() {
    return (
      <div className="search">
        <form className="search-box">
          <input  placeholder="Buqueda" />
          <button>Buscar</button>
        </form>
      </div>
    );
  }
  
  export default Navbar; 
  