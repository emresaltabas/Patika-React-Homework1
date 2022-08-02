import axios from "axios";
export default getData;

async function getData(userId){
    const {data:users}=await axios("https://jsonplaceholder.typicode.com/users/"+userId)
    const {data:posts}=await axios("https://jsonplaceholder.typicode.com/posts?id="+userId)

    console.log("user: ", users)
    console.log("post: ", posts)
}

