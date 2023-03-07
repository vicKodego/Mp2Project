import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (

      <div className="root-main">
        
        <Header></Header>
        
        <Link to="/">Home Page</Link> &nbsp;
        <Link to="/about">About Page</Link> &nbsp;
      
        <Outlet />

        <Footer></Footer>
      </div>

    );
  }
  
  export default RootLayout;
  