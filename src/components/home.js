// import Axios from 'axios';
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Home extends Component {
    
    
    render() {
        const { merches }= this.props;
        const merchList = merches.length ? (
            merches.map(merch => {
                return (
                   
                             <div key={merch.id} className="home-box">
                                    {/* <Link to={'/' + merch.id}> */}
                                        <div className="img home-img">
                                            <img id="one" src={merch.image} alt="a merch" />
                                        </div>
                                    {/* </Link> */}
                                            <p id="merchname">{merch.name}</p>
                            </div>
                       
                        
                    
                )
            })
        ) : (
            <div className="center grey darken-5">No merches yet</div>
        ) 
        return (
            <div className="master">

                

                <div className="home-container">
                    <Link to="/allWatch" style={{ textDecoration: 'none', color: "black" }}>{merchList[0]}</Link>
                    <Link to="/allIvy" style={{ textDecoration: 'none', color: "black", opacity: "0.4" }}>{merchList[1]}</Link>
                    <Link to="/allSneaker" style={{ textDecoration: 'none', color: "black", opacity: "0.4" }}>{merchList[2]}</Link>
                    <Link to="/allBag" style={{ textDecoration: 'none', color: "black", opacity: "0.4" }}>{merchList[3]}</Link>
                    
                </div>

                
                <div className="icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-paypal"></i>
                </div>
    
                <div className="footer-info">
                    <div id="footer-left">
                        <p>&copy;2020 Wrixty</p>
                    </div>
                
                    <div id="footer-right">
                        <span id="one">Privacy & Cookies  |</span>
                        <span id="two">Ts & Cs</span>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        merches: state.merches
    }
}

export default connect(mapStateToProps)(Home)








