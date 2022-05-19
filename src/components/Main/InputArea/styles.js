import styled from 'styled-components'

export const InputArea = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 0%;
    padding: 20px;
    display: flex;
    margin-top: 10px;
`
export const form = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
export const DateInput = styled.input`
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 5px;
`
export const TextInput = styled.input`
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 5px;
`
export const ValueInput = styled.input`
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 5px;
    &&::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
`
export const CategoryInput = styled.select`
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 5px;
`
export const addButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 8px 14px; 
    cursor: pointer;
    box-shadow: 0px 0px 4px rgba(0,0,0, 0.4);
    &&:hover{
        background-color: rgb(220, 220, 220);
    }
`