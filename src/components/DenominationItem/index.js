import './index.css'


const DenominationItem=props=>{
    const {details,updateBalance}=props
    const {value}=details


    const handleClick=()=>{

        updateBalance(value)

    }
    return(
        <li className="list-item">
            <button className="btn"  onClick={handleClick}>{value}</button>

        </li>
    )
}

export default DenominationItem