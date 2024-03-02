import profilePic from './assets/155744710.jpg'
import List from './List.jsx'

function Card() {
    return(
        <>
        <div className="card">
            <img className="image" src={profilePic}></img>
            <p>Soliken</p>
            <p>soliken@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic}></img>
            <p>LetMeCook</p>
            <p>letmecook@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic}></img>
            <p>ajwnl</p>
            <p>ajwnl@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic}></img>
            <p>western union</p>
            <p>westernunion@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic}></img>
            <p>ash</p>
            <p>ash@gmail.com</p>
        </div>
        </>
    ); 
}

export default Card 

