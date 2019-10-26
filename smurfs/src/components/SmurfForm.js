import React, { Component } from 'react'

//import actions
import { addSmurf } from '../actions/index'

//import connect/store
import { connect } from 'react-redux'

class SmurfForm extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            height: '',
            age: ''
          }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const { name, height, age } = this.state;

        const newVillager = {
            name,
            age,
            height
        }

        this.props
            .addSmurf(newVillager)
    }


    render () {

        const { name, height, age } = this.state;

        return (

            <div className = "form-container">
                <h3>Add a new Smurf</h3>
                    <form>
                        {/* Name */}
                        <input 
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.onChange} 
                            /> <br />

                        {/* Age */}
                        <input 
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={age}
                            onChange={this.onChange} 
                            /> <br />

                        <input 
                            type="text"
                            name="height"
                            placeholder="Height"
                            value={height}
                            onChange={this.onChange} 
                            /> <br />
                        <button type="submit" className="button">Add that Smurf!</button>
                    

                    </form>
            </div>

        )

    }

}

const mapDispatchToProps = {
    addSmurf
}
 
export default connect(
    null,
    mapDispatchToProps
)(SmurfForm)