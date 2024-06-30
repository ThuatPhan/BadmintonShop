import { useEffect, useState } from "react"

const useCategory = () => {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true)

                const response = await fetch("/Api/api/categories")
                const data = await response.json()

                if (response.ok) {
                    setCategories(data)
                }

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        getCategories()
    }, [])


    const getCategory = async (categoryId) => {
        try {
            setLoading(true)
            const response = await fetch(`/Api/api/categories/${categoryId}`,
                {
                    method: "GET",
                    headers: new Headers(
                        {
                            "ngrok-skip-browser-warning": "69420",
                        }
                    )
                })
            const data = await response.json()
            if (response.ok) {
                return data;
            }
            else {
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const createCategory = async (category) => {
        try {
            setLoading(true)
            const response = await fetch("/Api/api/categories",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(category)
                }
            )
            const data = await response.json()
            if (response.ok) {
                setCategories((prev) => [...prev, data])
            } else {
                console.log(data)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const updateCategory = async (category) => {
        try {
            setLoading(true)
            const response = await fetch(`/Api/api/categories/${category.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(category)
                }
            )
            const data = await response.json()

            if (response.ok) {

                const updatedCategories = categories.map((category) => {
                    if (category.id === data.id) {
                        return { id: category.id, name: data.name }
                    }
                    return category
                })

                setCategories(updatedCategories)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    const deleteCategory = async (categoryId) => {
        try {
            setLoading(true)
            const response = await fetch(`/Api/api/categories/${categoryId}`,
                {
                    method: "DELETE",
                }
            )

            // const data = await response.json()

            if (response.ok) {

                const updatedCategories = categories.filter((category) => {
                    if (category.id !== categoryId) {
                        return category
                    }
                })

                setCategories(updatedCategories)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }


    return {
        loading,
        categories,
        createCategory,
        getCategory,
        updateCategory,
        deleteCategory
    }
}

export default useCategory