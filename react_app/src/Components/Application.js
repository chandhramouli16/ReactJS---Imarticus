export function Application(){
    const userName="John Smith";
    return(
        <Layout userName={userName}>
            Main Content
        </Layout>
    );
}

function Layout({children,userName}){
    return(
        <>
            <Header userName={userName}/>
            <main>
                {children}
            </main>
        </>
    );
}

function Header({userName}){
    return(
        <header>
            <UserInfo userName={userName}/>
        </header>
    );
}

function UserInfo({userName}){
    return <span>{userName}</span>;
}