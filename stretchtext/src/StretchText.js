import React, { Component } from 'react'

class StretchText extends Component {

  constructor(props) {
    super(props)
    this.state = {clicked: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: true})
  }

  render() {
    const isClicked = this.state.clicked

    const contentForState = (isClicked) ? this.props.children : this.props.collapsed 

    return (
      <span onClick={this.handleClick}>{contentForState}</span>
    )
  }
}

export default StretchText