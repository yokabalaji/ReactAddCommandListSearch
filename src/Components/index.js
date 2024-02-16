import './index.css';


const Comments = props =>{

    const {commentDetails,isLikeMet,onDeleteCmd}=props
    const {id,name,command,isLike}=commentDetails

    const toggleOperation=()=>{
        isLikeMet(id)
    }
    const ondelete=()=>{
        onDeleteCmd(id)
    }
    const isUrl=isLike?"https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg"
            :"https://w7.pngwing.com/pngs/507/350/png-transparent-computer-icons-like-button-heart-symbol-alive-love-heart-thumb-signal.png";
    
    return (
        <li>
            <h2 className="name">{name}</h2>
            <p className="cmd">{command}</p>
            <div className='btns'>
            <button className="like-btn" onClick={toggleOperation}>
                <img className='like-image' src={isUrl} alt="likeimg"  />
            </button>
            <button className="del-btn" onClick={ondelete}>
                <img className='del-image' src="https://www.freeiconspng.com/thumbs/delete-button-png/blue-delete-button-png-29.png" alt="likeimg"  />
            </button>
            </div>
        </li>
    )

}

export default Comments