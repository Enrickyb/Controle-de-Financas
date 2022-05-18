import React from 'react'
import * as C from './styles'
import { Categories } from '../../../Data/Categories'
export default function TableItem(props) {
 
   
  return (
      <C.TableLine>
          <C.TableColumn color='black'>{props.item.Date}</C.TableColumn>
          <C.TableColumn>
              <C.Category color={Categories[props.item.Category].color}>{props.item.Category}</C.Category>
              </C.TableColumn>
          <C.TableColumn>{props.item.Title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={Categories[props.item.Category].expense? 'red' : 'green'}>
                $ {props.item.Value}
                </C.Value>
            </C.TableColumn>
      </C.TableLine> 


    
  )
}
