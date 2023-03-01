import Image2 from '../images/2.jpeg';

function Profile(){
    return(
        <div className="profile white">
            <div className="top">
                <h1>PROFILE</h1>
                <h2>I'm a web developer at Purwadhika Football Club</h2>
            </div>
            <div className="left">
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias asperiores incidunt ducimus laudantium aliquid itaque corrupti tempore eos, provident quis iure eius fugit nobis praesentium aspernatur fuga! Temporibus, voluptates soluta.
                </p>
                <p>- Akhmad Firdaus</p>
            </div>
            <div className="middle">
                <img src={Image2} alt="" />
            </div>
            <div className="right">
                <h2>Details</h2>
                <h3>Name</h3>
                <p>Akhmad Firdaus</p>
                <h3>Age</h3>
                <p>25 years old</p>
                <h3>Address</h3>
                <p>Medan Merdeka, Central Jakarta, Indonesia</p>
                <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
};

export default Profile;