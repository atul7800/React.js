import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => (res[currency]))
        .then((res) => setData(res)) //Resume here
        //console.log(data)
    }, [currency])
    return data;
}

export default useCurrencyInfo;