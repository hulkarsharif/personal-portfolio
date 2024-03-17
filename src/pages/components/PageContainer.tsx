import styled from "styled-components";

const PageContainer = styled.section`
    max-width: 144rem;
    margin: 0 auto;

    align-items: center;
    padding-right: 9.55rem;
    padding-left: 9.55rem;

    @media (max-width: 84em) {
        //1344
        padding-right: 9.55rem;
        padding-left: 9.55rem;
    }

    @media (max-width: 75em) {
        //1200
        padding-right: 9.55rem;
        padding-left: 9.55rem;
    }
    @media (max-width: 69em) {
        //1104
        padding-right: 9.55rem;
        padding-left: 9.55rem;
    }
    @media (max-width: 64em) {
        //1024
        padding-right: 9.55rem;
        padding-left: 9.55rem;
    }

    @media (max-width: 56.25em) {
        //900
        padding-right: 9.55rem;
        padding-left: 9.55rem;
    }
    @media (max-width: 56.12em) {
        //834
        padding-right: 6rem;
        padding-left: 6rem;
    }

    @media (max-width: 37.5em) {
        //600
        padding-right: 3rem;
        padding-left: 3rem;
    }

    @media (max-width: 25em) {
        //400
        padding-right: 2rem;
        padding-left: 2rem;
    }

    @media (max-width: 24.375em) {
        //390
        /* margin-right: 1rem;
        padding-left: 1rem; */
    }
`;

export { PageContainer };
