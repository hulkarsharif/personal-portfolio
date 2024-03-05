import styled from "styled-components";
import { Button, Typography } from "../../../design-system";
import { AboutCard } from "./AboutCard";
import { aboutInfo } from "./data";

const SectionBase = styled.section`
    max-width: 192rem;
    padding: 2rem 15.2rem;
`;

const FeaturesTextWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    font-size: var(--space-40);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    font-size: var(--space-30);
`;

const AboutCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;

const About = () => {
    return (
        <SectionBase>
            <FeaturesTextWrapper>
                <Title variant="displayLG" weight="bold">
                    About
                </Title>
                <Description variant="displaySM" weight="medium">
                    Our solution provides simple yet effective project
                    management
                </Description>
            </FeaturesTextWrapper>
            <AboutCardsWrapper>
                {aboutInfo.map((feature, index) => (
                    <AboutCard key={index} info={feature} />
                ))}
            </AboutCardsWrapper>
        </SectionBase>
    );
};

export { About };
