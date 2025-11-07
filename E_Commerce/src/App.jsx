import {Routes , Route} from 'react-router'
import { HomePage } from './Components/HomePage'
import { CheckoutPage } from './Components/CheckoutPage'
import './App.css'

 function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
  }
  export default App;
