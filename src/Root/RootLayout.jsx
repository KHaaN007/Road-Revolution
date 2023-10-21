import { Outlet } from 'react-router-dom';
// import NavBar from '../component/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default RootLayout;