import React from 'react'
import * as C from './styles'

export default function Resume(props) {


  return (

    <C.ResumeArea>
        <C.DateSelect>
            
        </C.DateSelect>
        <C.Revenue>
            <div>Revenue</div>
            <div>$ {props.receita}</div>
            
        </C.Revenue>
        <C.Expense>
            <div>Expense</div>
            <div>$ {props.expense}</div>  
        </C.Expense>
        <C.Balance color={props.balance > 0 ? 'green' : 'red'}>
            <div>Balance</div>
            <div>${props.balance}</div>
        </C.Balance>
    </C.ResumeArea>

  )
}
