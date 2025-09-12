import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout'
import EmployeeProvider from "./context/EmployeeProvider";


const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Category = lazy(() => import('./pages/Category'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Stock = lazy(() => import('./pages/Stock'))
const StockDetails = lazy(() => import('./pages/StockDetails'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Profile = lazy(() => import('./pages/Profile'))
const Notfound = lazy(() => import('./pages/NotFound'))

function App() {

  return (
    <EmployeeProvider>
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='category' element={<Category />} />
            <Route path='products/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='stock' element={<Stock />} />
            <Route path='stock/:id' element={<StockDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </EmployeeProvider>
  )
}

export default App
