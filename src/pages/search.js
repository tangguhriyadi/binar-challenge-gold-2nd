import React, {useEffect, useState} from 'react'
import { Banner } from '../components'
import axios from 'axios'
import {API_URL} from '../utils/constant'

const Search = () => {
  const num = 1
  const [carData, setCarData] = useState('')
  useEffect(() => {
    axios.get(API_URL)
    .then(res => {
      setCarData(res.data)
      return res.data
    }
    )
    .then(res => {
      const filtered = res.filter(function(e) {
        return e.name !== null &&
        e.price !== null &&
        e.category !== null &&
        e.image !== null
      })
      return filtered
    })
    .then(res => console.log(res))
  }, [num])
  return (
    <>
    <Banner />
    
    </>
  )
}

export default Search