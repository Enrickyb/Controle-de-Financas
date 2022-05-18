import React, {useEffect, useState} from "react";
import * as CC from "./components/Main/styles";
import GlobalStyle from "./styled/GlobalStyle";
import { Header, HeaderTitle } from "./styled/Header";
import TableArea from "./components/Main/TableArea/TableArea";
import { Items } from "./Data/Items";
import Resume from "./components/Main/Resume";
import { Categories } from "./Data/Categories";
import InputArea from "./components/Main/InputArea/InputArea";


function App() {

  const [receita, setReceita]= useState(0)
  const [expense, setExpense]= useState(0)
  const [list, setList] = useState(Items)
  

  function handleAdd(newItem){
    setList([...list, newItem])
    
  }
  

  useEffect(()=>{
   let receitaCount = 0 
   let expenseCount = 0 
    for(let i in list){
      if(Categories[list[i].Category].expense){
        expenseCount += list[i].Value
      }else{
        receitaCount += list[i].Value
      }
    }
    setReceita(receitaCount)
    setExpense(expenseCount)

  },[list])

  return (
    <div>
    <GlobalStyle />

    <Header>
      <HeaderTitle>Sistema Financeiro</HeaderTitle>
    </Header>
    <CC.Main>
    <Resume balance={receita - expense} list={list} receita={receita} expense={expense}></Resume>
    <InputArea handleAdd={handleAdd}/>
    <TableArea list={list}></TableArea>
    </CC.Main>
    
    
    </div>
  );

}

export default App;
