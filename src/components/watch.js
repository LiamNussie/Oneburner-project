import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Watch extends Component {
    
    render() {
            const watch = this.props.watch ? (
                <div className="prod-page">
                    <Link to="/allWatch"><i className="fas fa-long-arrow-alt-left"></i></Link>
                        <div className="item-view">
                            <div className="image-side">
                                <img id="view-img" src={this.props.watch.image} alt="watch" />
                            </div>
                            <div className="info-side">
                                <h3>{this.props.watch.name}</h3>
                                <div id="line"></div>
                                <h4>{this.props.watch.price}</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consequatur, <br></br> placeat recusandae eveniet sit eius quisquam incidunt rem odio repellendus <br></br>iste reiciendis tempore deleniti, molestias impedit praesentium sequi accusantium <br></br> officiis sit amet, consectetur adipisicing elit.</p>
                                <h5>COLOUR: {this.props.watch.colour}</h5>
                                <div className="mini-btns">
                                    <div id="qty-btn">
                                        <span id="minus">-</span>
                                        <span id="value">1</span>
                                        <span id="plus">+</span>
                                    </div>
                                    <div className="add-cart">ADD TO CART</div>
                                    <div id="fav"><i className="far fa-heart"></i></div>
                                </div>
                                <div id="category">Category: {this.props.watch.category}</div>
                            </div>
                            
                            
                        </div>
                </div>
                
            ) : (
                <div className="center">Loading post...</div>
            )
              
      
        return (
            <div className="flex-container">
              { watch }
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.watch_id;
    return {
        watch: state.watches.find(watch => {
            return watch.id === id
        })
    }
}

export default connect(mapStateToProps)(Watch)



