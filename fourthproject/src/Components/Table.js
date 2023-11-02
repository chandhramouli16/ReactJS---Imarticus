import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class Table extends Component{
    render(){
        const data=[{
            name:'Ayaan',
            age:26
        },{
            name:'Ahana',
            age:27
        },{
            name:'Peter',
            age:28
        },{
            name:'Virat',
            age:29
        },{
            name:'Rohit',
            age:30
        },{
            name:'Dhoni',
            age:31
        },]
        const columns=[{
            Header:'NAME',
            accessor:'name'
        },{
            Header:'AGE',
            accessor:'age'
        }]
        return(
            <div>
                <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6]}/>
            </div>
        )
    }
}
export default Table;