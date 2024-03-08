import styled from "styled-components";
import { Button, Typography } from "../../../design-system";
import { ServiceCard } from "../Service/ServiceCard";
import { documents } from "../Service/data";
import { PageContainer } from "../../components";

const SectionBase = styled(PageContainer)`
    padding-top: 11rem;
    padding-bottom: 11rem;

    background-color: green;
`;

const ServiceTextWrapper = styled.div`
    /* text-align: center;
    margin-bottom: var(--space-50); */
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
`;

const ServiceCardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: var(--space-50);
    /* grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-30);
    margin-bottom: var(--space-50); */
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
