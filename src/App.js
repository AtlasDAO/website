import React from 'react'
import { jsx, ThemeProvider, Themed } from 'theme-ui'
import styled from 'styled-components'

import { Flex, Link } from 'rebass'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Flex sx={{width: '100%', justifyContent: 'center'}}>
          <Themed.h1>
            Atlas DAO
          </Themed.h1>
        </Flex>
        <Flex sx={{justifyContent: 'space-between'}}>
          <Link sx={{
              margin: '0px 20px'
            }}>
            <Themed.a href='https://atlasdao.notion.site/atlasdao/Atlas-DAO-735eff68bd2d4e4d8b2047a5a9d76a86'>
                📓 Manifesto
            </Themed.a>
          </Link>

          <Link sx={{
              margin: '0px 20px'
            }}>
            <Themed.a href='https://discord.gg/DhEkPAQd'>
              💬 Discord
            </Themed.a>
          </Link>
        </Flex>
      </Header>
    </ThemeProvider>
  );
}

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: linear-gradient(-45deg, #F4FFB0, #B0FFB4, #B0F1FF, #B0CBFF);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 75% 75%;
    }
    75% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default App;
