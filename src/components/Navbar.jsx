const Navbar = () => {
  const handleSuccess = () =>{
    alert('Processing Request...')
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Hamro Shopping App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active btn btn-outline-success" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active btn btn-outline-success" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active btn btn-outline-success" href="#">Top Picks</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Smartphones</a></li>
            <li><a className="dropdown-item" href="#">Televisions</a></li>
            <li><a className="dropdown-item" href="#">Laptops</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Other Accessories..</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleSuccess} className="btn btn-success" type="submit">Search</button>
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
