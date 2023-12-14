import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'

import RegisterLayout from './layouts/RegisterLayout'
export default function UseRouterElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    }
  ])
  return routerElement
}