import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Catalog from "./pages/Catalog/Catalog";
import MyList from "./pages/MyList/MyList";
import Brand from "./pages/Brand/Brand";
import Orders from "./pages/Orders/Orders";
import Shipping from "./pages/Shipping/Shipping";
import Inventory from "./pages/Inventory/Inventory";
import Picking from "./pages/Inventory/Picking";
import Wallet from "./pages/Wallet/Wallet";
import "./styles/global.css";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="mi-lista" element={<MyList />} />
          <Route path="marca" element={<Brand />} />
          <Route path="pedidos" element={<Orders />} />
          <Route path="envios" element={<Shipping />} />
          <Route path="inventario" element={<Inventory />} />
          <Route path="picking" element={<Picking />} />
          <Route path="billetera" element={<Wallet />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
