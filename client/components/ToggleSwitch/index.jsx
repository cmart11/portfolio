import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Container = styled.label`
    position: relative;
    display: inline-block;
    height: 20px;
    width: 40px;

    > input {
        display: none;
    }
`

const Slider = styled.span`
    position: absolute;
    cursor: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    transition: 0.4s;
    border-radius: 20px;

    &:before{
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #999;
        transition: 0.2s;
        border-radius: 50%;
    }
`

const SliderInput = styled.input`
    &:checked + ${Slider}{
        background-color: black;
        &:before {
            transform: translateX(15px);
            background-color: #999;
        }
    }
`

export default class ToggleSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
    }

    onToggle() {
        this.setState({

        })
    }
    render() {
        return (
            <Container>
                <SliderInput type="checkbox" checked={this.props.checked} onChange={e => this.props.onToggle(e.target.checked)} />
                <Slider />
            </Container>
        )
    }
}

ToggleSwitch.propTypes = {
    checked: PropTypes.bool,
    onToggle: PropTypes.func
}

const mapDispatch = dispatch => ({
    onToggle: value => dispatch(toggleSwitch(value))
})

const mapState = state => ({
    toggleState
})

// connect(mapState, mapDispatch)(ToggleSwitch);
