import React,{useMemo} from 'react';
import {useTable} from 'react-table';

const Colums =[
    {Header:'Display',accessor:'display-btn'},
    {Header:'Dish',accessor:'img'},
    {Header:'Display Name',accessor:'display_name'},
    {Header:'Price',accessor:'price'},
    {Header:'Delete',accessor:'delete-btn'}
]

const Table =({Data})=>{

    const columns = useMemo(()=>Colums,[])
    const data =useMemo(()=>Data,[])
    const tableInstance = useTable(
        columns,
        data
    )

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance;
    return(
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>        
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
    
}