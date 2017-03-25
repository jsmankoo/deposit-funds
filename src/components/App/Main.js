import React from 'react'
import { Body } from './StyledComponents'
import { DepositFunds } from '../DepositFunds/index'

export default function App (props) {
  return (
    <Body>
      <DepositFunds
        depositOptions={[5, 10, 20, 40, 100, 250, 1000]}
      />
    </Body>
  )
}