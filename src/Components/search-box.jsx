import React from 'react'

const SearchBox = ({placeholder,handleChange}) => {
  return (
    <input className='bg-blue-900 p-2 rounded-lg text-white drop-shadow-md' type="search" 
    placeholder={placeholder} 
    onChange={handleChange} />
  )
}

export default SearchBox