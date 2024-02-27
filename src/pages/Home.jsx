import User from "../assets/man.png";

function Home() {
    return (
        <>
            <div className="profile">
                <img src={User} className="user-img" alt="" />
                <div>
                    <h2>Hey i am Mihir</h2>
                    <h3>I am Web Designer and Web Developer</h3>
                    <h3>based in Ahmedabad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam vel in voluptas!</p>
                    <button className="btn">Connect</button>
                </div>
            </div>
        </>
    )
}

export default Home