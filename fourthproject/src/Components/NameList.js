import React from "react";

function NameList(props){
    const myList=props.myLists;
    const listItems=myList.map((myList)=>{
        return <li>{myList}</li>;
    });
    return(
        <div>
            <h2>Rendering List using props</h2>
            <ul>{listItems}</ul>
        </div>
    )
}

export default NameList;