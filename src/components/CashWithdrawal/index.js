import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component{
    state={
        balance:2000
    }

    updateBalance=(value)=>{
        this.setState(prevState=>({balance:prevState.balance-value}))
    }
    render(){
        const { denominationsList }=this.props
        const {balance}=this.state

       return (
        <div className="bg-container">
            <div className="card-container">
                <div className="logo-heading-container">
                    <div className="logo">S</div>
                    <h1 className="heading">Sarah Williams</h1>
                </div>
                <div className="balance-rupees-container">
                    <h1 className="balance">Your Balance</h1>
                    <div>
                        <h1 className="balance-avl">{balance}</h1>
                        <p className="rupees">in Rupees</p>
                    </div>
                </div>
                <div className="withdraw-btns-container">
                    <h1 className="withdraw">Withdraw</h1>
                    <p className="balance">CHOOSE SUM (IN RUPEES)</p>
                    <ul className="list-container">
                        {denominationsList.map(eachItem=>(
                            <DenominationItem key={eachItem.id} details={eachItem} updateBalance={this.updateBalance}/>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
       )
    }
}


export default CashWithdrawal