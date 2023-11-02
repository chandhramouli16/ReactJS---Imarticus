import { Route,Routes,Link } from "react-router-dom";
import PostsHome from "./PostsHome";
import PostsUser from "./PostsUser";
function PostsWebpages(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<PostsHome/>}/>
                <Route path="/Post/:id" element={<PostsUser/>}/>
            </Routes>
        </div>
    )
}
export default PostsWebpages;