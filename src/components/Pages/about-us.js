import '../Pages/about-us.css'
import blankImg from '../images/blank-picture.png'
function About(){
    return(
        <div classNameName="about">
            <div className="about-section">
        <h1>About Us Page</h1>
        <p>Our website contains different categories of books which are available in very affordable price than new onces 
        and as there is little changes in few of new books so purchasing old books would be better option.
        We have another exciting option for a user to get the knoledge very easily in cheaper than ever. Rental system on books, 
        means a user can rent any book for a particular time by paying a small amount of charges.</p>
      </div>
      
      <h1><u>OUR TEAM</u></h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src = {blankImg} alt="Ankur" />
            <div className="container">
              <h2>Ankur Saxena</h2>
              <p className="title">Frontend Developer</p>
              <p>Skills - HTML, CSS, Js, ReactJs</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>ankursaxenaankur0@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      
        <div className="col-lg-4">
          <div className="card" >
            <img src = {blankImg} alt="Amit"  />
            <div className="container">
              <h2>Amit Girwal</h2>
              <p className="title">Frontend Developer</p>
              <p>Skills - HTML, CSS, Js, ReactJs</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>amitgirwal143@gmail.comcom</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" >
            <img src = {blankImg} alt="Dipanshu"  />
              <div className="container">
                <h2>Dipanshu Sengar</h2>
                <p className="title">Frontend & Backend Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>dipanshusengar682@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
          </div>
        </div>
      
        <div className="col-lg-4">
          <div className="card" >
            <img src = {blankImg} alt="Himanshu"  />
            <div className="container">
              <h2>Himanshu Sanas</h2>
              <p className="title">Frontend & Backend Developer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>himanshusanas51@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" >
            <img src = {blankImg} alt="Deepak"  />
            <div className="container">
              <h2>Deepak Lovanshi</h2>
              <p className="title">Database</p>
              <p>Collection of Data</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>deepaklovanshi143@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" >
            <img src = {blankImg} alt="Dharmesh"  />
            <div className="container">
              <h2>Dharmesh Kawat</h2>
              <p className="title">Database</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>dharmeshkawat123@gmail.  com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default About;