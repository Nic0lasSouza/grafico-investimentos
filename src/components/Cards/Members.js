import ImageDisplay from "./Imgcard"

const Members = () => {
    const style ={ width:"70px", height:"50px", borderRadius:"" }
    return (
        <div className="members">
            <ImageDisplay src="img/user1.png" style={style}/>
            <ImageDisplay src="img/user4.png" style={style}/>
            <ImageDisplay src="img/user3.png" style={style}/>
            <ImageDisplay src="img/user4.png" style={style}/>
        </div>
    )
}

export default Members