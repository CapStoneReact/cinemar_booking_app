import { Outlet } from 'react-router-dom'
import HeaderHome from '../Components/HeaderHome/HeaderHome'


function HomeTemplate() {
    return (
        <div>
            <HeaderHome />
            <Outlet />
        </div>
    )
}

export default HomeTemplate