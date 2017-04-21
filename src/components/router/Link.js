import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Link extends Component {
  render () {
    return (
      <a href="#" onClick={this.handleClick}>{this.props.children}</a>
    )
  }

  handleClick = (e) => {
    e.preventDefault()
    history.pushState(null, '', this.props.to)
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}
