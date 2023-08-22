import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='pad flex flex_col ai_center gb_gray'>

      <Outlet />   

    </div>
  )
}

export default AuthLayout