import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BeHealthContext } from "../../Context"

export const UseLoggedInUser = (redirectUrl: string) => {
    const navigate = useNavigate()
    const { token } = useContext(BeHealthContext)
    const { setUrlRedirect } = useContext(BeHealthContext)

    useEffect(() => {
        if (token === "") {
            setUrlRedirect(redirectUrl)
            navigate("/login")
        }
    }, [])
}