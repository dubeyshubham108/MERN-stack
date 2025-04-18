import styled from "styled-components"

const StartGame = ( {toggle} ) => {
    return (
        <div>
            <Container>
                <div className="image">
                    <img src="/dices.png" alt="Dice Image" />
                </div>
                <div className="content">
                    <h1>DICE GAME</h1>
                    <Button
                    onClick={ toggle }
                    >PLAY NOW</Button>
                </div>
            </Container>
        </div>
    )
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 90vh;
    align-items: center;
    gap: 36px;
    line-height: 16px;

    .content {
        h1 {
            font-size: 76px;
            white-space: nowrap;
        }
    }
    .image {
        img {
            width: 400px;
            height: 360px;
        }
    }
`
const Button = styled.button`
    padding: 10px 18px;
    color: white;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border:none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.1s background ease-in;
    }
`;

