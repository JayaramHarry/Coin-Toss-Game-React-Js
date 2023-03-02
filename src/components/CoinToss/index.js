// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {isHeads: HEADS_IMG_URL, headCount: 0, tailCount: 0}

  onClickCoinTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 1) {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
      }))
      this.setState({isHeads: TAILS_IMG_URL})
    } else {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
      }))
      this.setState({isHeads: HEADS_IMG_URL})
    }
  }

  render() {
    const {isHeads, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img className="toss-image" src={isHeads} alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickCoinTossButton}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="toss-count">Total: {totalCount}</p>
            <p className="toss-count">Heads: {headCount}</p>
            <p className="toss-count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
