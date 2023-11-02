export const Student= (props)=>{
    console.log(props);
    return(
        <div>
            <hr/>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Email Address: {props.email}</p>
        </div>
    )
}