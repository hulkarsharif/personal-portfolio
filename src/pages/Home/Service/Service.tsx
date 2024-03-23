import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ServiceCard } from "../Service/ServiceCard";

import { documents } from "../Service/data";
import { PageContainer } from "../../components";

const SectionBase = styled(PageContainer)`
    transition: all 1s;

    @media (max-width: 56.25em) {
        //900px
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

    @media (max-width: 56.25em) {
        //900px
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
