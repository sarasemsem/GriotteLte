import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Sidebar = () => {
  return (
    <div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">GriotteLTE 0.1</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-1 d-flex">
      <div className="image">
        <img src="dist/img/user1.gif" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div class="info">
          <Link to="/" class="d-block">ONLY ADMIN</Link>
        </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
            <Link to="/" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Admin/AdminView" class="nav-link">
              <i class="nav-icon fas fa-users"></i><p>Admin dashboard<i class="fas fa-angle-left right"></i></p>
            </Link>
          </li>
         {/*<CustomLink to="/Admin/AdminView">Projects</CustomLink>*/}
          <li class="nav-item">
            <Link to="Admin/Po" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Product Owners
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="Admin/Projects" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Project List
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="Admin/Sprint" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Sprints 
                <i class="fas fa-angle-left right"></i>
              </p>
            </Link>
          </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}
export default Sidebar

function CustomLink({ to,children,...props}){
  const resolvedPath=useResolvedPath(to)
  const isActive= useMatch({path: resolvedPath.pathname,end:true})
  return(
    <li class="nav-item">
    <Link to={to} {...props} className={"nav-link "+isActive?"active":""}>
      <i class="nav-icon fas fa-table"></i><p>{children}<i class="fas fa-angle-left right"></i></p>
    </Link>
  </li>
  )
  }
