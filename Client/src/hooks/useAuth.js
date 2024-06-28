import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"


const useAuth = () => {

    const { setUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    const register = async (infor) => {
        try {
            setLoading(true)
            const response = await fetch("/Api/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(infor)
            })
            const data = await response.json()

            if (response.ok) {
                setUser(data)
                localStorage.setItem("user", data.token)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const login = async (infor) => {
        try {
            setLoading(true)
            const response = await fetch("/Api/api/auth/authenticate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(infor)
            })
            const data = await response.json()

            if (response.ok) {
                setUser(data)
                localStorage.setItem("user", data.token)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const logout = async () => {
        try {
            setLoading(true)
            const response = await fetch("/Api/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })
            const data = await response.json()

            if (response.ok) {
                setUser(null)
                localStorage.removeItem("token")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, register, login, logout }

}

export default useAuth