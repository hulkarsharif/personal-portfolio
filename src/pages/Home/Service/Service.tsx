import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ServiceCard } from "../Service/ServiceCard";

import { documents } from "../Service/data";
import { PageContainer } from "../../components";

const SectionBase = styled(PageContainer)`
    transition: all 1s;

    @media (max-width: 56.12em) {
        //834
        align-items: center;
    }
    @media (max-width: 37.5em) {
        padding: 1rem;
    }

    @media (max-width: 25em) {
        align-items: center;
        text-align: center;
    }
`;

const ServiceTextWrapper = styled.div`
    text-align: center;
    margin-bottom: 6.9rem;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
`;

const ServiceCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    //1300
    @media (max-width: 81.25em) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 75em) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        align-items: center;
        > :last-child {
            display: block;
        }
    }

    @media (max-width: 62.5em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        align-items: center;
        > :last-child {
            display: block;
        }
    }

    @media (max-width: 37.5em) {
        gap: var(--space-12);
    }

    @media (max-width: 25em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        text-align: center;
        margin: 5rem;
    }
`;

const Service = () => {
    return (
        <SectionBase>
            <ServiceTextWrapper>
                <Title variant="h5" weight="bold">
                    What Service do I provide.
                </Title>
            </ServiceTextWrapper>
            <ServiceCardsWrapper>
                {documents.map((docs, index) => (
                    <ServiceCard key={index} item={docs} />
                ))}
            </ServiceCardsWrapper>
        </SectionBase>
    );
};

export { Service };
