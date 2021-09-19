import React from "react";
import styled from "styled-components";

const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    animation: linear infinite alternate;
    animation-duration: 8s;

    @keyframes move-l-r {
        0% {
            left: 0;
        }
        50% {
            left: 100%;
            transform: translate(-100%, 0);
        }
        100% {
            left: 0;
        }
    }

    @keyframes move-r-l {
        0% {
            right: 0;
        }
        50% {
            right: 100%;
            transform: translate(100%, 0);
        }
        100% {
            right: 0;
        }
    }

    &.red {
        top: 0;
        animation-name: move-l-r;
        background-color: #e01a4f;
    }

    &.blue {
        bottom: 0;
        animation-name: move-r-l;
        background-color: #60e1e0;
    }
`;

const Rectangle = styled.div`
    width: 200px;
    height: 100px;
    background-color: #f9c22e;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function CSSOverlapAnimation() {
    return (
        <div
            style={{
                width: "50%",
                height: "200px",
                position: "relative",
            }}
        >
            <Circle className="red" />
            <Circle className="blue" />
            <Rectangle />
        </div>
    );
}

export default CSSOverlapAnimation;
