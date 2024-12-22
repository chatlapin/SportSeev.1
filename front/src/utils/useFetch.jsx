import { useState, useEffect } from 'react'

/**
 * This function will fetch data from the url passed to it, and return an object with the fetchedData, a
 * boolean indicating whether the data is loading, and a boolean indicating whether there was an error.
 * @category Custom Hooks
 *  @returns An object with three properties: isLoading, fetchData, and error.
 */
export function useFetch(url) {
    const [fetchedData, setFetchedDat] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setFetchedDat(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { isLoading, fetchedData, error }
}