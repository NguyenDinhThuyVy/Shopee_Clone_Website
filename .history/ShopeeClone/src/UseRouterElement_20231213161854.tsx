import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
export default function UseRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    }
  ])
  return
}
