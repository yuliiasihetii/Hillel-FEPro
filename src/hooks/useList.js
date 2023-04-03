import { useState, useEffect } from "react"
import { getList } from "../servise/api"

export default function useList(API) {
    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)

        getList(API).then(data => setList(data)).finally(() => setIsLoaded(true))
    }, [])

    return { list, isLoaded }
}