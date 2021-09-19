import React, { useState } from "react";
import styled, { css } from "styled-components";
import env from "react-dotenv";

const StyledSearchWidget = styled.div`
    width: 500px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #007991;
    box-shadow: 3px 3px 10px 3px #222;
    margin: 25px 0;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 1.8em;

    ${(props) =>
        props.isExpanded &&
        css`
            height: 450px;
        `}
`;

const StyledInput = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin: 10px;
    text-indent: 10px;
`;

const ResultsWrapper = styled.div`
    width: 90%;
    height: 60%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: min-content;
    overflow-y: scroll;
    margin: 0 1.5em;
    gap: 0 1em;
`;

const gifSearchUrl = "https://api.giphy.com/v1/gifs/search";

function GifSearchWidget() {
    const [searchExpandedView, setSearchExpandedView] = useState(false);
    const [gifResults, setGifResults] = useState([]);
    const handleChange = (e) => {
        const asyncHandleChange = async () => {
            if (e.target.value.length == 0) {
                setSearchExpandedView(false);
                return;
            }
            setSearchExpandedView(true);
            const response = await fetch(
                `${gifSearchUrl}?api_key=${env.GIPHY_API_KEY}&q=${e.target.value}&limit=10`
            );

            const json = await response.json();

            setGifResults(json.data);
            console.log(json.data);
        };

        asyncHandleChange();
    };

    return (
        <StyledSearchWidget isExpanded={searchExpandedView}>
            <h1
                style={{
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: "1em",
                }}
            >
                SEARCH FOR A GIF
            </h1>
            <form>
                <StyledInput
                    type="text"
                    placeholder="You know you want to..."
                    onChange={handleChange}
                />
            </form>
            {searchExpandedView ? (
                <ResultsWrapper>
                    {gifResults.map((gifObject) => (
                        <div key={gifObject.id}>
                            <embed
                                style={{
                                    width: "100%",
                                    padding: "0 10px",
                                    overflowY: "hidden",
                                }}
                                src={gifObject.embed_url}
                            />
                            {/* <img
                                style={{ width: "150px" }}
                                src={gifObject.url}
                                alt="error"
                            /> */}
                        </div>
                    ))}
                </ResultsWrapper>
            ) : (
                ""
            )}
        </StyledSearchWidget>
    );
}

export default GifSearchWidget;
