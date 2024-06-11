import { Link } from "react-router-dom"
const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <Link to="/"><a className="navbar-brand">Hamro Gadget</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"><b className="nav-link active">Home</b></Link>
        </li>
        <li className="nav-item">
          <Link to="/about"><b className="nav-link active">About</b></Link>
        </li>
       
        <li className="nav-item">
          <Link to='/latest'><b className="nav-link active">Latest</b></Link>
        </li>
        {/* <li className=" dropdown">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Smartphones</a></li>
            <li><a className="dropdown-item" href="#">Televisions</a></li>
            <li><a className="dropdown-item" href="#">Laptops</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Other Accessories..</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      
      <form className="d-flex">
        <Link to="/login"><a >Login</a></Link>
      </form>
    </div>
  </div>
</nav>
{/* <p className="d-inline-flex gap-1">
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p> */}
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
{/* <ul className="list-group">
  <li className="list-group-item">Food Item</li>
  <li className="list-group-item active" aria-current="true">Cuttleries</li>
  <li className="list-group-item " aria-current="true">Accessories</li>
  <li className="list-group-item"></li>
  <li className="list-group-item">And a fifth one</li>
</ul> */}
</>
  )
}

export default Navbar
