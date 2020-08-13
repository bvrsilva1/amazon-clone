import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../state/StateProvider'
import { getBasketTotal } from '../state/reducer'

const Subtotal = () => {
  const [{ basket }, dispatcher] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className='subtotalGift'>
              <input type='checkbox' />
              This order constains a gift
            </small>
          </>
        )}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
