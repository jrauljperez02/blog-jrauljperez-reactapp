import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from "react-router-dom";

import data from './header-data.json'

const Logo = () => {
  return (
    <LogoContent>
        <Link to = ''>
          <img src= {data.logo['url']} alt = '' />
        </Link>
    </LogoContent>
  )
}

export default Logo

const LogoContent = styled.div`
    .hide-title{
        display: none;
    }
    justify-self: center;
    a{
        display: block;
        margin: 10px auto;
        img{
            width: auto;
            height: 50px;
        }
    }
`