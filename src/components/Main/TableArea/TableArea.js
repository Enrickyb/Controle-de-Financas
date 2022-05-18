import React from 'react'
import TableItem from '../TableItem'
import * as C from './styles'

export default function TableArea(props) {
  
  return (
    <C.Table>
        <thead>
            <tr>
              <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
              <C.TableHeadColumn width={130}>Category</C.TableHeadColumn>
              <C.TableHeadColumn>Title</C.TableHeadColumn>
              <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {props.list.map((item, index)=>(
                <TableItem index={index} item={item} key={index}></TableItem>
            ))}
        </tbody>

    </C.Table>
  )
}
