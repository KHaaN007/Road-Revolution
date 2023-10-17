import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {


    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);

                Swal.fire({
                    title: 'Successfully Login, Welcome To A p e x i f y',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                location('/')


            })
            .catch(err => {
                console.log(err.message);
            })
    }




    return (
        <div>
            <h2 className="text-5xl text-center my10">This is <span className="text-sky-300 font-bold">SignIn</span> Page</h2>
            <button  onClick={handleGoogleLogin} className="btn btn-outline">Google Login</button>
        </div>
    );
};

export default SignIn;