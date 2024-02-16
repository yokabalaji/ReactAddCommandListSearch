import { Component } from "react";
import {v4 as uuidv4} from "uuid";
// import { formatDistanceToNow } from 'date-fns'
import Comments from "./Components";
import './App.css';
const commentsList=[
  
]
class App extends Component{

  state={commentList:commentsList,name:'',comment:'',searchList:''}

onChangeingtxt=(event)=>{
  this.setState({name:event.target.value})
}
onchangeComd=(event)=>{
  this.setState({command:event.target.value})
}

clickComment=(event)=>{
  //  event.preventDefault()
  const{name,command}=this.state
  const date = new Date()
  const addnew={
    id:uuidv4(),
    name,
    command,
    date,
    isLike:false,
  }

  this.setState(prevState=>({
  commentList:[...prevState.commentList,addnew],
  name:'',
  command:'',
  }))

}
onDeleteMet=(id)=>{
  const {commentList}=this.state
  this.setState(({commentList:commentList.filter(eachitem=>(eachitem.id !== id))}))

}

toggleLike=(id)=>{

  this.setState(prevState=>({commentList:prevState.commentList.map((eachitem)=>{
    if(eachitem.id===id){
      return {...eachitem,isLike:!eachitem.isLike}
    }
    return eachitem
  })}))

}

searchinglist=(event)=>{
  this.setState({searchList:event.target.value});

}

render(){
  const {name,command,commentList,searchList}=this.state
const filteringSearchList=commentList.filter(eachitem=>(
(eachitem.name.toLowerCase()).includes(searchList.toLowerCase())
))
  
  return(
    <div className="container">
      <div className="inputContainer">
        <h1 className="title"> Comments </h1>
        <label className="namelable">Name :</label>
        <input value={name} type="text"  className="nameInput" onChange={this.onChangeingtxt}></input>
       <label className="cmdlabel">Comment :</label>
        <textarea value={command} className="cmdInput" onChange={this.onchangeComd} cols={20} rows={10}></textarea>
        <button className="cmdbtn" type="button" onClick={this.clickComment}>Comment</button>
      </div>

      <div  className="UnListDiv">
        <label className="searching">Search</label>
        <input type="text" className="srchinput" value={searchList} onChange={this.searchinglist}></input>
       
        <ul className="unList">
        {filteringSearchList.map(eachitem=>(
          <Comments key={eachitem.id} commentDetails={eachitem} isLikeMet={this.toggleLike} onDeleteCmd={this.onDeleteMet}/>))
        
        }   
         </ul>

      </div>
    </div>
  )

}
}

export default App;
