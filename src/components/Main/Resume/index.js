import React from 'react'
import * as C from './styles'

export default function Resume(props) {


  return (

    <C.ResumeArea>
      
        <C.Revenue>
            <div>Receita</div>
            <div>R$ {props.receita}</div>
            
        </C.Revenue>
        <C.Expense>
            <div>Despesa</div>
            <div>R$ {props.expense}</div>  
        </C.Expense>
        <C.Balance color={props.balance > 0 ? 'green' : 'red'}>
            <div>Saldo</div>
            <div>R${props.balance}</div>
        </C.Balance>
    </C.ResumeArea>

  )
}
