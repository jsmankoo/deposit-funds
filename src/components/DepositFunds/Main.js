import React from 'react'
import { Container, Header, SubHeader } from './StyledComponents'
import { Button, Col, Input, Row } from '../StyledComponents/index'

export default function DepositFunds ({
  // data
  subheader, creditCardNumber, isValid, depositOptions, amount, name, expiry, cvc,
  // handlers
  handleOnCreditCardUpdate, handleOnAmountUpdate, handleOnNameUpdate, handleOnExpiryUpdate, handleOnCVCUpdate, handleOnSubmit,
}) {
  return (
    <Container onSubmit={handleOnSubmit}>
      <Col padding='1.5rem 0' align='center'>
        <Header>Deposit Funds</Header>
        <SubHeader>{subheader}</SubHeader>
      </Col>
      <Row>
        {
          depositOptions.map(deposit => (
            <Button type='button' active={deposit === amount} margin='0 .5rem' key={deposit} onClick={handleOnAmountUpdate(deposit)}>${deposit}</Button>
          ))
        }
      </Row>
      <Row>
        <Input flex='1'  type='number' placeholder='Credit Card Number' value={creditCardNumber} onChange={handleOnCreditCardUpdate} />
      </Row>
      <Row>
        <Input width='65%' placeholder='Name' value={name} onChange={handleOnNameUpdate} />
        <Input width='20%'  type='number' placeholder='MM/YY' value={expiry} onChange={handleOnExpiryUpdate} />
        <Input width='15%'  type='number' placeholder='CVC' value={cvc} onChange={handleOnCVCUpdate} />
      </Row>
      <Button type='submit' active value='Submit' marginBottom='3rem'>
        Deposit Funds
      </Button>
    </Container>
  )
}