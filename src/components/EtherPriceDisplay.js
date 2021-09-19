import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EtherPriceDisplayStyled = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        90deg,
        hsla(220, 89%, 74%, 1) 24%,
        hsla(250, 75%, 64%, 1) 100%
    );
    margin: 25px 0;
    border-radius: 20px;
    color: #fff;
    font-weight: 700;
    font-size: 1.8em;
`;

const API_URL = "https://api.coingecko.com/api/v3";

function EtherPriceDisplay() {
    const [etherPriceUSD, setEtherPriceUSD] = useState(0);

    useEffect(() => {
        const etherPriceAPICall = async () => {
            const id = "ethereum";
            const vsCurrency = "usd";
            const url =
                API_URL + `/simple/price?ids=${id}&vs_currencies=${vsCurrency}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                console.log(data.error);
                return;
            }

            setEtherPriceUSD(data.ethereum.usd);
        };
        etherPriceAPICall();
    });

    return (
        <EtherPriceDisplayStyled>
            <img
                style={{ width: "50px", marginRight: "15px" }}
                src="ethereum.png"
                alt="ethereium-logo"
            ></img>
            {`$ ${etherPriceUSD} USD`}
        </EtherPriceDisplayStyled>
    );
}

export default EtherPriceDisplay;
