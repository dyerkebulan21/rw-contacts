
import { useState, useEffect } from 'react'
import { DATAVIEWMODES } from './constants'

const getInitialDataViewMode = () => {
    return localStorage.getItem("dataViewMode") || DATAVIEWMODES.TABLE
}

export const useDataViewMode = () => {
    const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode)
    useEffect(() => {
        localStorage.setItem("dataViewMode", dataViewMode)
    }, [dataViewMode])
    return [dataViewMode, setDataViewMode]
}