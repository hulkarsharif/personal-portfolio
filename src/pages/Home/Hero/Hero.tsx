import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/women-dev-remove.png";

const HeroSection = styled(PageContainer)`
    display: flex;
    align-items: center;
    gap: 40px;
    background-color: lightskyblue;
`;
const HeroSectionLeft = styled.div`
    /* width: 50%; */
    flex: 1;
`;

const HeroLeftWrapper = styled.div`
    width: 55rem;
`;
const HeroSectionRight = styled.div`
    /* max-width: 50%; */
    flex: 1;
    margin-right: var(--space-12);
`;
const HeroTitle = styled(Typography)`
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
            <HeroSectionLeft>
                <img src={women} alt="women" />
            </HeroSectionLeft>

            <HeroLeftWrapper>
                <HeroSectionRight>
                    <HeroTitle
                        weight="bold"
                        variant="displayLG"
                        align="inherit"
                    >
                        Hi I am Khulkar.
                    </HeroTitle>

                    <HeroDescription
                        weight="semibold"
                        variant="displaySM"
                        align="center"
                    >
                        I am a full-stack developer with 1 year of experiance
                        Node.js.
                        <br /> Please rech out to me.
                    </HeroDescription>
                    <a href="mailto:sharipovah01@gmail.com">
                        <Button size="sm" color="danger" shape="rounded">
                            Contact me
                        </Button>
                    </a>
                </HeroSectionRight>
            </HeroLeftWrapper>
        </HeroSection>
    );
};

export { Hero };
