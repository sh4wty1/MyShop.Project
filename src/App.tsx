import { Header } from "./components/Header/Header"
import { ProductsList } from "./components/ProductsList/ProductsList"
import { GlobalStyles } from "./styles/GlobalStyles"

export const App = () => {

  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </>
  )
}
