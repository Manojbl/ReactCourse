import {Routes , Route} from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { TrackingPage } from './Pages/TrackingPage'
import { OrdersPage } from './Pages/OrdersPage'
import './App.css'

 function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
  }
  export default App;
