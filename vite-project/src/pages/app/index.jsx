import { BrowserRouter } from 'react-router-dom';
import { ShoppingCarProvider } from '../../context';
import AppRoutes from '../../components/rutas';
import NavBar from '../../components/navbar';
import Layout from '../../components/layout';
import '../../App.css';
import CheckOutSideMenu from '../../components/checkOutSideMenu';

function App() {
  
  return (
    <ShoppingCarProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        <NavBar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default App