import './Header.scss'
import {BiCubeAlt} from 'react-icons/bi'

function Header () {
  return (
    <div className="header">
     <div className='text'>
     <BiCubeAlt/>
        <span>WeatherForecast</span>
     </div>
    </div>
  )
}

export default Header
