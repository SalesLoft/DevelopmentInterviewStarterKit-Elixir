import React from 'react'
import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  padding-top: 30px;
`

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 827px;
  height: 485px;
  border-top: 6px solid #4a90e2;
`

const InstructionsBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  p {
    font-size: 20px;
  }
`

const LogoImage = styled.img`
  height: 65px;
`

const Logo = () => (
  <FlexBox>
    <LogoImage src="/images/logo.svg" />
    <h1>SalesLoft Developer Interview Kit</h1>
  </FlexBox>
)

const Instructions = () => (
  <InstructionsBox>
    <h3 style={{textAlign: 'center'}}>
      Thank you for your interest in joining the SalesLoft Engineering team!
    </h3>
    <p>
      This app is built with an Elixir backend and a React frontend,
      use whatever you'd like out of this repo,
      or any other framework/langauge. Refer to the
      <a href="https://docs.google.com/document/d/1SbhRTd6ewr0w1rgE-nB8yk7LR1exy8rL0JJCMAwgfns/edit?ts=5a57d0ac"> instructions</a>.
    </p>
    <p style={{textAlign: 'center'}}>
      API Documentation can be found at <a href="https://developers.salesloft.com">https://developers.salesloft.com</a>
    </p>
    <h3 style={{textAlign: 'center'}}>
      Questions? Email us at <a href="mailto:engineeringjobs@salesloft.com">engineeringjobs@salesloft.com</a>
    </h3>
  </InstructionsBox>
)

export const Intro = () => (
  <Box>
    <Logo />
    <Instructions />
  </Box>
);
