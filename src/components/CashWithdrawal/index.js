// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => {
      const newBalance = prevState.balance - value
      if (newBalance >= 0) {
        return {balance: newBalance}
      }
      return {balance: prevState.balance}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="box">
          <div className="name-box">
            <p className="name-head">{initial}</p>
            <p>{name}</p>
          </div>
          <div className="balance-box">
            <p className="your-balance">Your Balance</p>
            <p className="balance-name">
              <span className="balance">{balance}</span>
              <br /> In Rupees
            </p>
          </div>
          <p>Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="dominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
