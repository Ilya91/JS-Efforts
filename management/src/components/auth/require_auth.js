import React, { Component } from 'react';
import { connect } from 'react-redux'
import {push, replace} from 'react-router-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
          store.dispatch(push('/signin'))
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
          store.dispatch(push('/signin'))
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
