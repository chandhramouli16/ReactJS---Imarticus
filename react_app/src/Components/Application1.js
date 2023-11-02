import { useContext, createContext } from "react";

const UserContext=createContext("Unknown");

export function Application1(){
    const userName="John Smith";
    return(
        <UserContext.Provider value={userName}>
        <Layout>
            Main Content
        </Layout>
        </UserContext.Provider>
    );
}

function Layout({children}){
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    );
}

function Header(){
    return(
        <header>
            <UserInfo/>
        </header>
    );
}

function UserInfo(){
    const userName=useContext(UserContext);
    return <span>{userName}</span>;
}