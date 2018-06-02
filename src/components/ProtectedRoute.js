import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'

class  ProtectedRoute extends Component {
  render() {
let { authenticated, component, path, render} = this.props
let routeProps = {
    component,
    path,
    render
  
   

}

return authenticated ? <Route {... routeProps} /> :  <Redirect  to = '/' /> 
  
}
}
export default ProtectedRoute;