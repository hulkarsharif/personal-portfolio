import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/4444.png";

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
    margin-right: var(--space-12);
`;

const HeroSectionLeft = styled.div`
    width: 60rem;
    height: 60rem;
    padding-top: var(--space-70);
    padding-left: 12.8rem;
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

const SocialMedia = styled.div`
    color: var(--black-900);
    display: flex;
    gap: var(--space-36);
    align-items: center;
    svg {
        cursor: pointer;
        height: 2.3rem;
        width: 2rem;
        margin-top: 0.7rem;
        transition: all 1s;
        &:hover {
            transform: scale(1.25);
        }
    }
`;

const GreenLine = styled.div`
    width: 10.7rem;
    height: 0.15rem;
    background-color: var(--green-900);
    border-radius: 0.4rem;
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
                        Experienced software engeneer located in USA
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
                    <SocialMedia>
                        <a href="mailto:sharipovah01@gmail.com">
                            <Button size="sm" color="success" shape="circle">
                                Contact me
                            </Button>
                        </a>

                        <Icon iconName="instagram" />
                        <Icon iconName="github-icon" />
                        <Icon iconName="linkedin-svgrepo-com" />
                        <GreenLine></GreenLine>
                        {/* 
                        <Icon iconName="line-decoration" /> */}
                    </SocialMedia>
                </HeroSectionRight>
            </HeroLeftWrapper>
            <HeroSectionLeft>
                <img src={women} alt="women" />
            </HeroSectionLeft>
        </HeroSection>
    );
};

export { Hero };
