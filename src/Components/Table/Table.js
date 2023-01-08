import React,{useMemo} from 'react';
import {useTable} from 'react-table';

const Colums =[
    {Header:'Display',accessor:'display-btn'},
    {Header:'Dish',accessor:'img'},
    {Header:'Display Name',accessor:'display_name'},
    {Header:'Price',accessor:'price'}
    {Header:'Delete',accessor:'delete-btn'}
]

const Table =({Data})=>{

    const columns = useMemo(()=>Columns,[])
    const data =useMemo(()=>Data,[])
    const tableInstance = useTable(
        columns,
        data
    )
    return(
        <table>
            <thead>
                <tr>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
    )
    
}