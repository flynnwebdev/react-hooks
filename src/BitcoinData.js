import React, { useState, useEffect } from "react";

export default function BitcoinData(props) {
  const [bitcoinData, setBitcoinData] = useState();

    useEffect(() => {
        async function getBitcoinData() {
            let res = await fetch(
                `https://api.coindesk.com/v1/bpi/currentprice/${props.currency}.json`
            );
            let data = await res.json()
            setBitcoinData(data.bpi[props.currency])
        }
        getBitcoinData()
        // componentWillUnmount
        return () => console.log("component will unmount")
    }, [props.currency])

    return (
    <div>
      {bitcoinData && (
        <p>
          {bitcoinData.rate} {bitcoinData.description}
        </p>
      )}
    </div>
  );
}
