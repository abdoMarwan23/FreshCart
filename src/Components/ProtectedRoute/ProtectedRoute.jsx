import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import Login from "../Login/Login"


export default function ProtectedRoute({ children }) {
    

    let { userToken } = useContext(AuthContext)

    return (
        <>
            {userToken ? children : 
                <>
                    {/* <h1 className="text-3xl text-red-600 font-bold text-center mt-4">Please Login First</h1> */}
                    <Login />
                </>
            }
        </>
    )
}
