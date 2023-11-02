export const Student1=(props)=>{
    console.log(props);
    return(
        <div>
            <hr/>
            <p>First name: {props.stud.firstName}</p>
            <p>Last name: {props.stud.lastName}</p>
            <p>Email address: {props.stud.email}</p>
        </div>
    )
}