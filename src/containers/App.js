import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as Actions from '../actions'

const App = ({idle, inventory, rockets, missions, actions}) => (
  <div>
    <Header/>
    <MainSection inventory={inventory} rockets={rockets} missions={missions}/>
  </div>
)

App.propTypes = {
  inventory: PropTypes.object.isRequired,
  rockets: PropTypes.object.isRequired,
  missions: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({  
  inventory: state.inventory,
  rockets: state.rockets,
  missions: state.missions,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
