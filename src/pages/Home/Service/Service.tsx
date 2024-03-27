import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ServiceCard } from "../Service/ServiceCard";
import yellow from "../../../design-system/assets/image/HIGHLIGHT-sm.png";
import { documents } from "../Service/data";
import { PageContainer } from "../../components";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;

    @media (max-width: 81.25em) {
        //1300

        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media (max-width: 56.25em) {
        //900
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    /* @media (max-width: 44em) {
        //704
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    } */
`;
const SectionBase = styled(PageContainer)`
    padding-top: 5rem;
    transition: all 1s;

    @media (max-width: 57em) {
        //912px
    }

    @media (max-width: 30em) {
        //480x
        padding-left: -2rem;
        padding-right: -2rem;
    }
`;

const ServiceTextWrapper = styled.div`
    text-align: center;
    margin-bottom: 6.9rem;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    font-size: var(--space-45);

    position: relative;
    z-index: 4;

    @media (max-width: 31.25em) {
        //500
        font-size: var(--space-40);
    }
    @media (max-width: 26.75em) {
        //428
        font-size: 3.3rem;
    }
    @media (max-width: 25em) {
        //400
        font-size: 3rem;
    }
`;
const YellowLine = styled.span`
    position: absolute;
    left: 43%;
    bottom: -10%;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;

    @media (max-width: 26.75em) {
        //428
        width: 50%;
        left: 22rem;
    }
`;

const ServiceCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    @media (max-width: 57em) {
        //912
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 56.25em) {
        //900px
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 32em) {
        //512
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 26.87em) {
        //430
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 25em) {
        //400
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Service = () => {
    return (
        <SectionsBase>
            <SectionBase>
                <ServiceTextWrapper>
                    <Title variant="h5" weight="bold">
                        What service do I provide.
                        <YellowLine>
                            <img src={yellow} alt="yellow" />
                        </YellowLine>
                    </Title>
                </ServiceTextWrapper>
                <ServiceCardsWrapper>
                    {documents.map((docs, index) => (
                        <ServiceCard key={index} item={docs} />
                    ))}
                </ServiceCardsWrapper>
            </SectionBase>
        </SectionsBase>
    );
};

export { Service };
