import { useEffect, useState } from "react"

const useProduct = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [productsOfCategory, setProductsOfCategory] = useState([])

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

    const getProduct = async (productId) => {
        try {
            setLoading(true)

            const response = await fetch(`/Api/api/products/${productId}`)
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                console.log(data)
            }
        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }
    }

    const getProductOfCategory = async (categoryId) => {
        try {
            setLoading(true)
            const response = await fetch(`/Api/api/categories/${categoryId}/products`)
            const data = await response.json()

            if (response.ok) {
                //for home page
                setProducts(data)
                //for product in category page
                setProductsOfCategory(data)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const createProduct = async (productInfor, selectedFile) => {

        try {

            const formData = new FormData()
            formData.append("name", productInfor.name)
            formData.append("description", productInfor.description)
            formData.append("price", productInfor.price)
            formData.append("categoryId", productInfor.categoryId)
            formData.append("imageFile", selectedFile)

            const token = localStorage.getItem("token")

            const response = await fetch("/Api/api/products", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData
            })

            const data = await response.json()

            if (response.ok) {
                setProducts((prev) => [...prev, data])
            } else {
                console.log(data);
            }

        } catch (error) {
            console.log(error);
        }
    }


    const updateProduct = async (productId, productInfor, selectedFile) => {
        try {

            const formData = new FormData()
            formData.append("name", productInfor.name)
            formData.append("description", productInfor.description)
            formData.append("price", productInfor.price)
            formData.append("categoryId", productInfor.categoryId)

            if (selectedFile) {
                formData.append("imageFile", selectedFile)
            }


            const token = localStorage.getItem("token")

            const response = await fetch(`/Api/api/products/${productId}`,
                {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                }
            )
            const data = response.json()

            if (response.ok) {
                const updatedProduct = products.map((product) => {
                    if (product.id === data.id) {
                        return {
                            id: product.id,
                            name: data.name,
                            description: data.description,
                            price: data.price,
                            imageURL: data.imageURL
                        }
                    }

                    return product
                })

                setProducts(updatedProduct)
            } else {
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (productId) => {
        try {

            const token = localStorage.getItem("token")

            const response = await fetch(`/Api/api/products/${productId}`,
                {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )

            if (response.ok) {
                const updatedProduct = products.filter((product) => {
                    return product.id !== productId
                })

                setProducts(updatedProduct)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        loading,
        products,
        productsOfCategory,
        getProduct,
        getProductOfCategory,
        createProduct,
        updateProduct,
        deleteProduct
    }

}

export default useProduct