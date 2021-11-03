import './home.css'
function Home(){
    const styleCol = {
        height: "624px",
        backgroundImage: "url('library.jpg')",
        backgroundSize: "cover",
        // marginTop: "-60px"
    }

    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div style={styleCol} className="col-lg-6 bookDiv">
                        <div className="col-lg-6 mx-auto text-center text-white bookish">
                            <h1>BOOKISH</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="col-lg-6 text-white mx-5 text-left mt">
                            <h1>BUY OLD BOOKS</h1>
                            <p>WHY WASTE! <br /> GET THE SAME IN LESS</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;