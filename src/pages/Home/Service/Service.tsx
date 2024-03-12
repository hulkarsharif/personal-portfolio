import styled from "styled-components";
import { Button, Typography } from "../../../design-system";
import { ServiceCard } from "../Service/ServiceCard";

import { documents } from "../Service/data";
import { PageContainer } from "../../components";

const SectionBase = styled(PageContainer)`
    padding-top: 10rem;
    padding-bottom: 10rem;
    transition: all 1s;
`;

const ServiceTextWrapper = styled.div`
    text-align: center;
    margin-left: 37.5rem;
    margin-right: 37.5rem;
    padding-bottom: 6.9rem;

    /* margin-bottom: var(--space-50); */
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
`;

const ServiceCardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: var(--space-50);
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
