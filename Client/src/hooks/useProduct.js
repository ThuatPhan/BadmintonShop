import { useEffect, useState } from "react"

const useProduct = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("/Api/api/products")
            const data = await response.json()

            if (response.ok) {
                setProducts(data)
            }
        }

        getProducts()
    }, [])

    const createProduct = async (productInfor, selectedFile) => {

        try {
            setLoading(true)

            const formData = new FormData()
            formData.append("name", productInfor.name)
            formData.append("description", productInfor.description)
            formData.append("price", productInfor.price)
            formData.append("categoryId", productInfor.categoryId)
            formData.append("imageFile", selectedFile)

            const response = await fetch("/Api/api/products", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            console.log(data)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return { loading, products, createProduct }

}

export default useProduct