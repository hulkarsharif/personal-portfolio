import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/women-dev-remove.png";

const HeroSection = styled(PageContainer)`
    display: flex;
    align-items: center;
    gap: 40px;
    background-color: var(--gray-200);
`;

const HeroLeftWrapper = styled.div`
    width: 55rem;
`;
const HeroSectionRight = styled.div`
    max-width: 64.5rem;

    /* flex: 1; */
    margin-right: var(--space-12);
`;

const HeroSectionLeft = styled.div`
    width: 64rem;
    /* flex: 1; */
`;
const HeroTitle = styled(Typography)`
    width: 29rem;
    height: 14rem;
    margin-bottom: var(--space-12);

    margin-right: var(--space-40);
    justify-content: space-between;
`;
const HeroDescription = styled(Typography)`
    margin-bottom: var(--space-12);
    font-size: 1.5rem;
    display: block;
    align-items: center;

    justify-content: space-between;
`;

//
const Hero = () => {
    return (
        <HeroSection>
            <HeroLeftWrapper>
                <HeroSectionRight>
                    <HeroTitle weight="bold" variant="h5" align="inherit">
                        Hi I am Khulkar.
                    </HeroTitle>

                    <HeroDescription
                        weight="bold"
                        variant="displayLG"
                        align="center"
                    >
                        I am a full-stack developer with 1 year of experiance
                    </HeroDescription>
                    <a href="mailto:sharipovah01@gmail.com">
                        <Button size="sm" color="danger" shape="rounded">
                            Contact me
                        </Button>
                    </a>
                </HeroSectionRight>
            </HeroLeftWrapper>
            <HeroSectionLeft>
                <img src={women} alt="women" />
            </HeroSectionLeft>
        </HeroSection>
    );
};

export { Hero };
