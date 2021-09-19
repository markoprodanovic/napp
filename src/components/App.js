import React, { useState } from "react";
import styled from "styled-components";
import EtherPriceDisplay from "./EtherPriceDisplay";
import GifSearchWidget from "./GifSearchWidget";
import CSSOverlapAnimation from "./CSSOverlapAnimation";
import ImageCarousel from "./ImageCarousel";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    background-color: #222e50;
`;

const Button = styled.button`
    border-radus: 3px;
    border: 2px solid palevioletred;
    background-color: palevioletred;
    border-radius: 4px;
    color: #fff;
    padding: 0.25em 1em;
    margin: 25px 15px;
    font-size: 1.2rem;
    width: 125px;

    &:hover {
        transition: 0.2s ease-in;
        background-color: #af5a76;
        border: 2px solid #af5a76;
    }
`;

function App() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    // });

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <AppContainer>
            <h1 style={{ color: "#fff", marginBottom: "2.5rem" }}>
                👋 Welcome to my (n)app
            </h1>
            <div
                style={{
                    width: "50%",
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <p style={{ fontStyle: "italic", color: "#fff" }}>
                    <strong style={{ fontSize: "1.3rem" }}>
                        What is a (n)app?
                    </strong>{" "}
                    An app is short for application, implying something
                    applicable. This is not-applicable therefor not an
                    application...so (n)app.
                </p>
                <p style={{ fontStyle: "italic", color: "#fff" }}>
                    <strong style={{ fontSize: "1.3rem" }}>
                        Why create a (n)app?
                    </strong>{" "}
                    Have you ever looked at the notebook of a great writer,
                    designer, musician or engineer? Theres something interesting
                    and valuable about peering into someones process.
                </p>
                <p style={{ fontStyle: "italic", color: "#fff" }}>
                    Below is my (n)app where I create tools and widgets to
                    explore programming and design concepts. Treat it like
                    looking at my notebook.
                </p>
            </div>
            <div>
                <Button onClick={increment}>Increment</Button>
                <Button
                    onClick={() => {
                        setCount(0);
                    }}
                >
                    Reset
                </Button>
            </div>
            <div style={{ color: "#fff", fontSize: "1.8em" }}>{count}</div>
            <EtherPriceDisplay />
            <GifSearchWidget />
            <CSSOverlapAnimation />
            <ImageCarousel />
        </AppContainer>
    );
}

export default App;
