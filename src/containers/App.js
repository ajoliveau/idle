import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as Actions from '../actions'

const App = ({idle, inventory, rockets, actions}) => (
  <div>
    <Header/>
    <MainSection inventory={inventory} rockets={rockets}/>
  </div>
)

App.propTypes = {
  inventory: PropTypes.object.isRequired,
  rockets: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({  
  inventory: state.inventory,
  rockets: state.rockets
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
