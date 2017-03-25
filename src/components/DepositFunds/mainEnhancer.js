import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose'
import validator from 'card-validator'

const enhancer = compose(
    withState('money', 'updateMoney', 0),
    withState('creditCardData', 'updateCreditCardData', {amount: 40, creditCardNumber: '', name: '', expiry: '', cvc: ''}),
    withProps(props => ({
      subheader: `${props.money.toLocaleString()} won in last 24 hrs!`,
      amount: props.creditCardData.amount,
      creditCardNumber: props.creditCardData.creditCardNumber,
      name: props.creditCardData.name,
      expiry: props.creditCardData.expiry,
      cvc: props.creditCardData.cvc,
      isValid: props.creditCardData.creditCardNumber !== '' && validator.number(props.creditCardData.creditCardNumber).isPotentiallyValid,
    })),
    withHandlers({
      handleOnAmountUpdate: ({creditCardData, updateCreditCardData}) => (amount) => (event) => {
        updateCreditCardData({...creditCardData,
          amount,
        })
      },

      handleOnCreditCardUpdate: ({creditCardData, updateCreditCardData}) => ({target: {value}}) => {
        updateCreditCardData({...creditCardData,
          creditCardNumber: value.slice(0,16),
        })
      },

      handleOnNameUpdate: ({creditCardData, updateCreditCardData}) => ({target: {value}}) => {
        updateCreditCardData({...creditCardData,
          name: value,
        })
      },

      handleOnExpiryUpdate: ({creditCardData, updateCreditCardData}) => ({target: {value}}) => {
        updateCreditCardData({...creditCardData,
          expiry: value.slice(0,4),
        })
      },

      handleOnCVCUpdate: ({creditCardData, updateCreditCardData}) => ({target: {value}}) => {
        updateCreditCardData({...creditCardData,
          cvc: value.slice(0,3),
        })
      },

      handleOnSubmit: ({money, creditCardData, isValid}) => (event) => {
        event.preventDefault()
        alert(`
          CreditCard isValid: ${isValid}
          money deposited: ${money}
          credit card number: ${creditCardData.creditCardNumber}
          name: ${creditCardData.name}
          expiry: ${creditCardData.expiry}
          cvc: ${creditCardData.cvc}
        `)
      }
    }),
    lifecycle({
        componentDidMount () {
            const { updateMoney } = this.props
            // fetch relavant data from api and set it
            updateMoney(123123123)
        },
        
        componentWillUnmount () {
            const { updateMoney } = this.props
            // If fetch not returned do request cancellation here
            updateMoney(0)
        }
    })
)

export default enhancer