import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProduct from './components/NewProduct'

function App() {

  return (

    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch />} > </Route>
        <Route path='products' element={<Products />} >
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
