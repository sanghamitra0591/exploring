import CartContextProvider from './context/CartContext'
import Router from './routes/AllRoutes'

function App() {

  return (
    <>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </>
  )
}

export default App
