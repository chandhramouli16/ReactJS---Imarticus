function Example1(){
    const isLoggedIn=false;
    return(
        <div>
            Welcome {isLoggedIn?'Back':'Please Login first'}
        </div>
    )
}

export default Example1;