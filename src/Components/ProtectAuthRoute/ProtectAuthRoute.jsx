import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { Navigate } from "react-router-dom"

export default function ProtectAuthRoute({ children }) {

    let { userToken } = useContext(AuthContext)

    return (
        <>
            {!userToken ? children : <Navigate to={'/'} />}
        </>
    )
}
