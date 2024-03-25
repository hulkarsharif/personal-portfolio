import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/blue-img.png";
import FileViewer from "./FileViewer";
const HeroContainer = styled(PageContainer)`
    display: flex;
    /* padding-top: 5rem; */
    padding-bottom: 5rem;
    align-items: center;
    gap: var(--spacing-16);
    justify-content: space-between;

    background-color: var(--black-200);

    @media (max-width: 84em) {
        //1344
        /* padding-right: 9.55rem;
        padding-left: 9.55rem; */
    }
    //1300
    @media (max-width: 81.25em) {
        margin-left: 5.5rem;
        margin-right: 5.5rem;
    }

    @media (max-width: 75em) {
        padding-right: 5.5rem;
    }

    @media (max-width: 62.5em) {
        /* padding-left: 2.5rem; */
    }

    @media (max-width: 56.25em) {
        padding-left: 2rem;
    }

    @media (max-width: 50em) {
        padding-right: 10.5rem;
    }

    @media (max-width: 43.75em) {
    }

    @media (max-width: 37.5em) {
        display: inline-block;
        text-align: center;
        align-items: center;
        padding-left: 3.4rem;
        padding-right: 3.4rem;
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
    padding-right: 2.5rem;
    padding-left: 7.9rem;
    @media (max-width: 84em) {
        //1344
        width: 55%;
    }

    @media (max-width: 75em) {
        width: 50%;
    }

    @media (max-width: 56.25em) {
        padding-right: 1rem;
    }

    @media (max-width: 43.75em) {
        padding-left: 0.5rem;
    }

    @media (max-width: 37.5em) {
        width: 100%;
    }
    @media (max-width: 25em) {
        width: 100%;
    }
`;

const HeroTitle = styled(Typography)`
    letter-spacing: 0.4em;
    color: var(--dodger-blue-900);
    padding-top: 0rem;

    margin: 48px 0px 0px;

    @media (max-width: 37.5em) {
        display: block;
        align-items: center;
        font-size: 2.1rem;
    }

    @media (max-width: 25em) {
        display: block;
        font-size: 1.7rem;
        line-height: 4rem;
        margin-bottom: 1rem;
    }
`;
const HeroDescription = styled(Typography)`
    font-size: 5rem;
    line-height: 85px;
    display: flex;
    align-items: left;
    text-align: left;

    @media (max-width: 37.5em) {
        align-items: start;
        font-size: 3rem;
        line-height: 4rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    @media (max-width: 25em) {
        align-items: start;
        font-size: 2.8rem;
        line-height: 3.8rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;

const HeroParagraph = styled(Typography)`
    margin-bottom: var(--space-20);
    color: var(--black-400);
    line-height: 2.9rem;
    font-weight: 50rem;

    @media (max-width: 25em) {
        line-height: 1.8rem;
        font-size: 1.5rem;
        display: flex;
        text-align: center;
        text-align: center;

        color: bold;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    gap: var(--space-36);
    align-items: center;

    svg {
        cursor: pointer;
        height: 2.3rem;
        width: 2.3rem;
        margin-top: 0.7rem;
        transition: all 1s;
        &:hover {
            transform: scale(1.25);
        }

        @media (max-width: 56em) {
            width: 1.5rem;
        }
    }

    @media (max-width: 62.5em) {
        display: flex;
        gap: var(--space-10);
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
        display: inline-block;
        gap: var(--space-36);

        :not(:last-child) {
            margin-right: 1.2rem;
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 25em) {
        display: inline-block;
        gap: var(--space-20);
        padding-top: 1rem;

        :not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;

const BlueLine = styled.div`
    width: 10.7rem;
    height: 0.15rem;
    background-color: var(--dodger-blue-900);
    border-radius: 0.4rem;

    @media (max-width: 62.5em) {
        display: none;
    }

    @media (max-width: 56em) {
        display: none;
    }
`;

const HeroSectionRight = styled.div`
    width: 40%;

    margin-right: 6.5rem;

    transition: all 1s;
    &:hover {
        transform: scale(1.04);
    }

    img {
        object-fit: contain;
        height: 48rem;

        background-color: var(--black-200);
        /* border-radius: 22rem; */
    }

    @media (max-width: 84em) {
        width: 60%;
    }
    @media (max-width: 62.5em) {
        width: 55%;
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

    @media (max-width: 37.5em) {
        width: 100%;

        img {
            height: 32rem;
        }
    }

    @media (max-width: 25em) {
        width: 100%;

        img {
            height: 25rem;
            margin-right: 2rem;
        }
    }
`;

//
const Hero = () => {
    return (
        <HeroContainer>
            <HeroSectionLeft>
                <HeroTitle weight="bold" variant="h6" align="inherit">
                    HI, I AM KHULKAR
                </HeroTitle>
                <HeroDescription weight="bold" variant="displaySM" align="left">
                    I am FullStack Developer
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
                    <FileViewer />

                    <BlueLine></BlueLine>
                </SocialMedia>
            </HeroSectionLeft>

            <HeroSectionRight>
                <img src={women} alt="women" />
            </HeroSectionRight>
        </HeroContainer>
    );
};

export { Hero };
