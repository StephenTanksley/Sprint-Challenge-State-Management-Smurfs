import React, { Component } from 'react'
import { connect } from 'react-redux'

class Smurf extends Component {
    render() {

        const { name, age, height, id } = this.props

        return (
            <div className = "smurf-card">
                <div className = "inner-container">
                    <h4 className="smurf-name">{name}</h4>
                    <p className="smurf-age">Age: {age}</p>
                    <p className="smurf-height">Height: {height}</p>
                </div>
            </div>
        )
    }
}

export default Smurf

// export default connect(
//     mapStateToProps, 
//     null
//     )(Smurf)