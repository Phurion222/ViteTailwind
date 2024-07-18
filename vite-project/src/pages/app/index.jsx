import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../components/rutas';
import NavBar from '../../components/navbar';
import Layout from '../../components/layout';
import '../../App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
      <NavBar />
    </BrowserRouter>
  )
}

export default App