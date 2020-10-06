import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Button'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    // componentWillUnmount() {
    //     if (this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    render() {

        return (
            <div className="container">
                <div className="collection">
                    <h2 className="collection-item"><b>Total: {this.props.total} $</b></h2>
                </div>
                <div className="checkout">
                    <Button className="waves-effect waves-light btn">Checkout</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
