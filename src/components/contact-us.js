import {Link} from "react-router-dom"
import "./contact-us.css"
function Contact(){
    return(
        <div class="container">
            <Link id="contact_head" to='/'>
                <h2>BOOKISH</h2>
            </Link>
            <div class="contact-section">
                <h2 class="ct-section-head">
                CONTACT US
                </h2>
                <div class="row contact-fields">
                    <div class="col-md-8 left-form">
                    <form method="post" action="">
                        <div class="form-group">
                            <label class="sr-only" for="fname">First Name *</label>
                            <input class="required form-control" id="fname" name="fname" placeholder="First Name&nbsp;*" type="text" />
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="lname">Last Name *</label>
                            <input class="required form-control" id="lname" name="lname" placeholder="Last Name&nbsp;*" type="text" />
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="contactEmail">Email *</label>
                            <input class="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="Email&nbsp;*" type="text" />
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="contactPhone">Phone *</label>
                            <input class="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text" />
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="comment">Type your message here</label>
                            <textarea class="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="6"></textarea>
                        </div>
                        <button class="btn btn-accent" type="submit">Submit</button>  
                    </form>
                    </div>

                    <div class="col-md-4 contact-info">
                        <div class="phone">
                            <h5>Call</h5>
                            <a href="tel:6268781876">6268781876</a>
                        </div>
                        <div class="email">
                            <h5>Email</h5>
                            <a href="mailto:ankursaxenaankur0@gmail.com">ankursaxenaankur0@gmail.com</a>
                        </div>
                        <div class="location">
                            <h5>Visit</h5>
                            <p>One Town Center <br />
                                1356/5 Nanda Nagar
                                <br /> Indore, FL 451010 <br />
                                <br />
                                <a class="btn btn-accent" href="" target="_blank"><img src="https://www.solodev.com/assets/contact-us-page/map-marker.png" alt="Map Marker" />Google Maps</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;