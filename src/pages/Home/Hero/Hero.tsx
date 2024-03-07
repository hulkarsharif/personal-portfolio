import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/4444.png";

import instagram from "../../../design-system/assets/image/INSTAGRAM.png";
import dribble from "../../../design-system/assets/image/DRIBBBLE.png";
import behance from "../../../design-system/assets/image/BEHANCE.png";

import blueLine from "../../../design-system/assets/image/LINE DECORATION.png";

const HeroSection = styled(PageContainer)`
    display: flex;
    padding-left: 7.9rem;
    align-items: center;
    gap: 40px;
    background-color: var(--black-200);
`;

const HeroLeftWrapper = styled.div`
    width: 64rem;
`;
const HeroSectionRight = styled.div`
    max-width: 64.5rem;

    /* flex: 1; */
    margin-right: var(--space-12);
`;

const HeroSectionLeft = styled.div`
    width: 60rem;
    height: 60rem;
    padding-top: var(--space-70);
    padding-left: var(--space-80);

    /* flex: 1; */
`;
const HeroTitle = styled(Typography)`
    width: 29rem;
    /* height: 14rem; */
    color: var(--green-900);
    /* margin-bottom: var(--space-70); */

    margin-right: var(--space-40);
    justify-content: space-between;
`;
const HeroDescription = styled(Typography)`
    font-size: 5rem;
    line-height: 5.5rem;
    display: block;
    align-items: center;
    text-align: left;
`;

const HeroParagraph = styled(Typography)`
    margin-bottom: var(--space-12);
    color: var(--black-400);

    line-height: 2.5rem;
`;
const SocialMedia = styled(Icon)`
    color: var(--black-900); // Adjust color as needed
`;

//
const Hero = () => {
    return (
        <HeroSection>
            <HeroLeftWrapper>
                <HeroSectionRight>
                    <HeroTitle weight="bold" variant="h6" align="inherit">
                        HI, I AM KHULKAR
                    </HeroTitle>
                    <HeroDescription
                        weight="bold"
                        variant="displaySM"
                        align="left"
                    >
                        I am a full-stack developer with 1 year of experiance.
                    </HeroDescription>
                    <HeroParagraph
                        weight="semibold"
                        variant="subtitleSM"
                        align="left"
                    >
                        With a keen eye for detail and a passion for creating
                        seamless user experiences, I have crafted innovative
                        solutions that meet client requirements and exceed
                        expectations. My portfolio demonstrates my ability to
                        effectively communicate with stakeholders, iterate on
                        feedback, and deliver high-quality, scalable software
                        solutions.
                    </HeroParagraph>
                    <a href="mailto:sharipovah01@gmail.com">
                        <Button size="sm" color="success" shape="circle">
                            Contact me
                        </Button>
                    </a>
                    <InstagramIcon iconName={instagram}>
                        <img src={instagram} alt="Instagram" />
                        <img src={dribble} alt="dribble" />
                        <img src={behance} alt="Behance" />
                        <img src={blueLine} alt="Line" />
                    </InstagramIcon>
                </HeroSectionRight>
            </HeroLeftWrapper>
            <HeroSectionLeft>
                <img src={women} alt="women" />
            </HeroSectionLeft>
        </HeroSection>
    );
};

export { Hero };
