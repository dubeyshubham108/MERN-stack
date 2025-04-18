
import styled from "styled-components";

const TotalScore = () => {
    return (
        <ScoreContainer>
            <h1>0</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore;

const ScoreContainer = styled.div`
    text-align: center;
    max-width: 200px;
    line-height: 1px;
    h1 {
        font-size: 100px;
        line-height: 50px;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }
`;