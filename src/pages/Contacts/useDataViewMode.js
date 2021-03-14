
import { useState, useEffect } from 'react'
import {DATAVIEWMODES} from './constants'
export const useDataViewMode = () => {
    const [dataViewMode, setDataViewMode] = useState()
    useState(localStorage.getItem("dataViewMode") || DATAVIEWMODES.TABLE)
 

    useEffect(() => {
        localStorage.setItem("dataViewMode", dataViewMode)
    }, [dataViewMode])
    return [dataViewMode, setDataViewMode]
}