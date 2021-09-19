import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useSwipeable } from "react-swipeable";

const Carousel = styled.ul`
    margin-top: 25px;
    list-style: none;
    display: flex;
    justify-content: center;
    width: 500px;
    height: 200px;
    position: relative;
    overflow: hidden;
`;

const Image = styled.li`
    min-width: 500px;
    min-height: 200px;
    color: #fff;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 60px;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    transform: ${(props) => props.translateX};
    transition: 0.8s ease-in-out;
`;

const Dots = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 60px;
`;

const Dot = styled.div`
    background-color: ${(props) => (props.active ? "#fff" : "#222e50")};
    border: 2px solid #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;
const buttonStyle = {
    border: "none",
    background: "none",
    cursor: "pointer",
};

const translationMappings = {
    1: "500",
    2: "0",
    3: "-500",
};

function ImageCarousel() {
    // const [translateX, setTranslateX] = useState(0);
    const [currentActiveDot, setCurrentActiveDot] = useState(2);

    const handleClick = (e, name) => {
        console.log("HANDLE CLICK");
        if (
            (currentActiveDot <= 1 && name == "left") ||
            (currentActiveDot >= 3 && name == "right")
        ) {
            return;
        }
        name == "left"
            ? setCurrentActiveDot(currentActiveDot - 1)
            : setCurrentActiveDot(currentActiveDot + 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: (e) => handleClick(e, "right"),
        onSwipedRight: (e) => handleClick(e, "left"),
    });

    const dots = [];
    for (let i = 0; i < 3; i++) {
        dots.push(<Dot />);
    }
    dots[currentActiveDot - 1] = <Dot active />;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {}
            <Carousel {...handlers}>
                <ImageContainer
                    translateX={
                        "translate(" +
                        translationMappings[currentActiveDot] +
                        "px)"
                    }
                    className="ImageContainer"
                >
                    <Image style={{ backgroundColor: "#C4B7CB" }}>1</Image>
                    <Image style={{ backgroundColor: "#FCB9B2 " }}>2</Image>
                    <Image style={{ backgroundColor: "#F46036" }}>3</Image>
                </ImageContainer>
                <ButtonsContainer>
                    <button
                        style={buttonStyle}
                        onClick={(e) => handleClick(e, "left")}
                    >
                        <AiFillCaretLeft
                            style={{
                                fontSize: "1.5rem",
                                opacity: "0.6",
                                fontColor: "fff",
                            }}
                        />
                    </button>
                    <button
                        style={buttonStyle}
                        onClick={(e) => handleClick(e, "right")}
                    >
                        <AiFillCaretRight
                            style={{ fontSize: "1.5rem", opacity: "0.6" }}
                        />
                    </button>
                </ButtonsContainer>
            </Carousel>
            <Dots>{dots}</Dots>
        </div>
    );
}

export default ImageCarousel;
