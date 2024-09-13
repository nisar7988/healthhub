import React from 'react'
import { useSelector } from 'react-redux'

const DoctorHome = () => {
  const data = useSelector((state) => state.DoctorInfo.doctor)
  return (
    <h3>
     Hello  {data ? `${data.name}` : ""}
    </h3>
  )
}

export default DoctorHome
