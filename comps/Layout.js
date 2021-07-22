import Footer from "./Footer"
import Navbar from "./Navbar"

// per rendere dei componenti utilizzabili in tutte le pagine creo
// un componente che racchiude glia altri componenti principali
const Layout = ({ children}) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
      );
}
 
export default Layout;