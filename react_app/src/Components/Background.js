import image from "./Console.png";

function Background(){
    return(
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"contain", height:600, width:800}}>
            Hello World!
        </div>
    );
}

export {Background};