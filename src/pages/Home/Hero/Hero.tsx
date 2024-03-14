import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/4444.png";

const HeroSection = styled(PageContainer)`
    display: flex;
    padding-top: 5rem;
    padding-bottom: 5rem;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background-color: var(--black-200);

    @media (max-width: 81.2em) {
        margin-left: 5.5rem;
        margin-right: 5.5rem;
    }

    @media (max-width: 75em) {
        padding-right: 5.5rem;
    }

    @media (max-width: 56.25em) {
        padding-left: 2.5rem;
    }

    @media (max-width: 50em) {
        padding-right: 10.5rem;
    }

    @media (max-width: 43.75em) {
    }

    @media (max-width: 37.5em) {
    }
    @media (max-width: 25em) {
        flex-direction: block;

        padding-left: 3.4rem;
        padding-right: 3.4rem;
        display: block;
        text-align: center;
    }
`;

const HeroSectionLeft = styled.div`
    width: 60%;

    @media (max-width: 120.4rem) {
        width: 50%;
    }

    @media (max-width: 56.25em) {
        padding-right: 1rem;
    }

    @media (max-width: 43.75em) {
        padding-left: 0.5rem;
    }

    @media (max-width: 37.5em) {
        padding-bottom: 5rem;
    }
    @media (max-width: 25em) {
        width: 100%;
    }
`;

const HeroTitle = styled(Typography)`
    /* width: 29rem; */
    color: var(--green-900);
    margin-right: var(--space-40);

    @media (max-width: 25em) {
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;

        font-size: 1.7rem;
        line-height: 1.8rem;
    }
`;
const HeroDescription = styled(Typography)`
    font-size: 5rem;
    line-height: 5.5rem;
    display: flex;
    align-items: center;
    text-align: left;
    @media (max-width: 25em) {
        align-items: start;
        font-size: 3rem;
        line-height: 3.4rem;
        text-align: center;
    }
`;

const HeroParagraph = styled(Typography)`
    margin-bottom: var(--space-12);
    color: var(--black-400);
    line-height: 2.5rem;

    @media (max-width: 25em) {
        line-height: 2rem;
        display: flex;
        text-align: center;
        text-align: center;

        color: bold;
    }
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

        @media (max-width: 56em) {
            width: 1.5rem;
        }
    }

    @media (max-width: 56em) {
        display: flex;
        justify-content: space-between;
        gap: var(--space-8);
    }

    @media (max-width: 43.75em) {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 37.5em) {
        flex-direction: row;
        justify-content: center;
        gap: var(--space-20);
    }

    @media (max-width: 25em) {
        flex-direction: block;
        justify-content: center;
        gap: var(--space-22);
    }
`;

const GreenLine = styled.div`
    width: 10.7rem;
    height: 0.15rem;
    background-color: var(--green-900);
    border-radius: 0.4rem;

    @media (max-width: 56em) {
        display: none;
    }
`;

const HeroSectionRight = styled.div`
    width: 40%;

    transition: all 1s;
    &:hover {
        transform: scale(1.04);
    }

    img {
        object-fit: contain;
        height: 50rem;
    }
    @media (max-width: 56.25em) {
        width: 60%;
        img {
            height: 45rem;
        }
    }

    @media (max-width: 56em) {
        width: 60%;

        img {
            object-fit: cover;
            height: 38rem;
        }
    }

    @media (max-width: 43.75em) {
        width: 60%;
        padding-right: 2rem;

        img {
            height: 38rem;
        }
    }

    @media (max-width: 25em) {
        width: 100%;
        background-color: orangered;
        img {
            height: 30rem;
        }
    }
`;

//
const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionLeft>
                <HeroTitle weight="bold" variant="h6" align="inherit">
                    HI, I AM KHULKAR
                </HeroTitle>
                <HeroDescription weight="bold" variant="displaySM" align="left">
                    Experienced software engeneer located in Virginia.
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
                        <Button size="lg" color="success" shape="circle">
                            Contact me
                        </Button>
                    </a>

                    <Icon iconName="instagram" />
                    <Icon iconName="github-icon" />
                    <Icon iconName="linkedin-svgrepo-com" />

                    <GreenLine></GreenLine>
                </SocialMedia>
            </HeroSectionLeft>

            <HeroSectionRight>
                <img src={women} alt="women" />
            </HeroSectionRight>
        </HeroSection>
    );
};

export { Hero };
