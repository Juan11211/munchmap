"use client"

import React, {useState} from 'react'

function RangeSelect({ onRadiusChange }) {

    const [radius, setRadius] = useState(10)

  return (
    <div>
      <h2 className='font bold px-2'>Select Radius (In Meter)</h2>
      <input type='range' 
      className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
      min={0}
      max={100}
      steps='10' 
      onChange={(e) => {setRadius(e.target.value); onRadiusChange(e.target.value)}}
      defaultValue={radius}/>
      <label className='text-gray-500 text-[15px]'>{radius * 1000} in meter</label>
    </div>
  )
}

export default RangeSelect
