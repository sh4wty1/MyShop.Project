import { Provider } from "react-redux"
import { Header } from "./components/Header/Header"
import { ProductsList } from "./components/ProductsList/ProductsList"
import { GlobalStyles } from "./styles/GlobalStyles"
import { store } from "./redux/store"

export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </Provider>
  )
}
