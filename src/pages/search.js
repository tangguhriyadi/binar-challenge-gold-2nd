import React, {useEffect, useState} from 'react'
import { Banner, SearchBox } from '../components'
import axios from 'axios'
import {API_URL} from '../utils/constant'

const Search = () => {

  const [carData, setCarData] = useState('')
  useEffect(() => {
    axios.get(API_URL)
    .then(res => {
      
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
    .then(res => {
      setCarData(res)
      console.log(res)
    })
  }, [])
  return (
    <>
    <Banner />
    <SearchBox carData={carData}  />
    </>
  )
}

export default Search