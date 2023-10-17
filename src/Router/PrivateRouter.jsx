import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const { loader, user } = useContext(AuthContext)

    if (loader) {
        return <>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </>
    }


    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRouter;