import currencies from './data/supported-currencies.json'

export default function CurrencySelector(props) {
    return (
        <div>
            <span>Select Currency: </span>
            <select onChange={(e) => props.updateCurrency(e.target.value)} value={props.currency}>
                {currencies.map(obj =>
                    <option key={obj.currency} value={obj.currency}>{obj.currency} {obj.country}</option>
                )}
            </select>
        </div>
    )
}
