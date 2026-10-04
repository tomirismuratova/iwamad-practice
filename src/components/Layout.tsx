import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header
        name="Muratova Tomiris"
        role="Aspiring Web Developer"
      />

      <Outlet />

      <Footer
        year={2026}
        name="Muratova Tomiris"
        week="Week 4"
      />
    </>
  )
}

export default Layout