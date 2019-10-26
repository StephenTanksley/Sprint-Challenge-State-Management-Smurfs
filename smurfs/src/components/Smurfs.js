import React, { Component } from 'react'
import { connect } from 'react-redux'

//actions
import { getSmurfs } from '../actions'

//components
import Smurf from './Smurf'

class Smurfs extends Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {

        //I'd like to import the spinner from the updateTitle project.
        const { smurfs, gettingSmurfs } = this.props

        return (
            <div className='smurfList' >
                <h3>Smurfs in the village: </h3>
                {/* {smurfs.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))} */}
            </div>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        smurfs: state.smurfs,
        gettingSmurfs: state.gettingSmurfs
    }
}


const mapDispatchToProps = {
    getSmurfs
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Smurfs)
