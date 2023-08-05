import styled from 'styled-components';

export const HomeSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #1E2E34;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;