import React, { useState } from "react";
import classes from "./Input.module.css";
import MedicineList from "./MedicineList";

const Input = () => {
    const [medicineName,setMedicineName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')

    const [medicineList,setMedicineList]=useState([])

    const NameChangeHandler=(e)=>{
     setMedicineName(e.target.value)
    }
    const descriptionChangeHandler=(e)=>{
      setDescription(e.target.value)
    }
    const priceChangeHandler=(e)=>{
      setPrice(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const newMedicine={
            medicineName,
            description,
            price
        }
        setMedicineList((prevData) => [...prevData, newMedicine])
        console.log(medicineList)
    }
    

  return (
    <>
    <form className={classes.form}>
      <label className={classes.label} htmlFor="name">
        Medicine Name:
      </label>
      <input type="text" id="name" name="name" value={medicineName} onChange={NameChangeHandler} />
      <label className={classes.label} htmlFor="description">
        Description:
      </label>
      <input type="text" id="description" name="description" value={description} onChange={descriptionChangeHandler}/>
      <label className={classes.label} htmlFor="price">
        Price:
      </label>
      <input type="text" id="price" name="price" value={price} onChange={priceChangeHandler}/>
      <button onClick={submitHandler}>Add Item</button>
    </form>
    <MedicineList medicineList={medicineList}/>
    </>
  );
};

export default Input;
