import React, { useEffect, useState } from 'react'

import * as C from './styles'
export default function InputArea(props) {
  const [text, setText]= useState()
  const [number, setNumber]= useState()
  const [select, setSelect]= useState()
  const [date, setDate]= useState()

  function addItem(){
    if(date && select && number && text){
      let newItem = {
        Date: date,
        Category: select,
        Title: text,
        Value: number
      }
      props.handleAdd(newItem)
      setText('')
      setNumber()
      setSelect('')
    }else{
      alert('Error, missing items')
    }
  }
  
  return (
    <C.InputArea>
        <C.form>
        Date:<C.DateInput type='date' onChange={(e) => setDate(e.target.value)}></C.DateInput>
        Category: <C.CategoryInput onChange={(e)=>{setSelect(e.target.value)}}>
          <option value="selected" defaultValue></option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Salary">Salary</option>
          <option value="Lazer">Lazer</option>

        </C.CategoryInput>
        Title: <C.TextInput type='text' value={text} onChange={(e)=>{
          setText(e.target.value)
          
          }}></C.TextInput>
        Value: <C.ValueInput type='number'  onChange={(e)=>{
          setNumber(Number(e.target.value))
          
        }}></C.ValueInput>
        <C.addButton onClick={(event)=>{
          event.preventDefault()
          addItem()
          
          }}>ADD</C.addButton>
      </C.form>
    </C.InputArea>
  )
}
