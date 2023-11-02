const divStyle={
    color:'red',
    FontFace:'bold',
    fontSize:50
};

function Contact(){
    return(
        <div style={divStyle}>
            <h5>Contact Module</h5>
            <h5 style={{color:'blue',fontSize:30}}>Learn more</h5>
        </div>
    )
}

export default Contact;