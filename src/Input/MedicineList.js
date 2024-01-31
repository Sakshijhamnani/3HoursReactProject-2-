import React from 'react'

const MedicineList = (props) => {
  return (
    <div>
      {  props.medicineList.map((item)=>{
         return <li><span>{item.medicineName}</span>--
         <span>{item.description}</span>--
         <span>{item.price}</span>
         <input min='1' max='5' defaultValue='1' type="number" />
         <button>+ Add To Cart</button></li>
        })}

    </div>
  )
}

export default MedicineList