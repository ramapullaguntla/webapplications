import React, {Component} from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component
{
    render()
    {
        return (
            <Wrapper href="http://www.onbase.com">
                <img src={logo} height="50" width="50" alt="http://www.hyland.com"></img>
            </Wrapper>
        )
    }
}

export default Logo