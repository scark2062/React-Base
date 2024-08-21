import { useState } from "react";
import blogContext from "./BlogContext";

const BlogState = (props) => {
    const a={
        name :"ramesh",
        age :20
    }
  const [state, setState]=  useState(a)
  const updateValue =()=>{
    setTimeout(() => {
        setState({
            name:"dinesh",
            age: 17
        })
    },2000);
  }
  const [article, setArticle] = useState([])
     console.log(article);
    const fetchData =async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}`
        let data = await fetch(url)
        let parseData= await data.json()
        console.log(parseData);
        setArticle(parseData.articles)

        
       }
      
    return (
        <blogContext.Provider  value={{state ,updateValue , article, fetchData}}>
            {props.children}
        </blogContext.Provider>
    )
}
export default BlogState