import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import women from "../../../design-system/assets/image/blue-img.png";

import FileViewer from "./FileViewer";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;
    background-color: var(--black-200);

    @media (max-width: 56.25em) {
        //900
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;
const HeroContainer = styled(PageContainer)`
    display: flex;
    padding-bottom: 5rem;
    align-items: center;
    /* gap: 9rem; */
    justify-content: space-between;

    @media (max-width: 56.25em) {
        padding-bottom: 10rem;
        display: block;
        align-items: center;
        text-align: center;
        /* padding-left: 9.5rem;
        padding-right: 9.5rem; */
    }
`;

const HeroSectionLeft = styled.div`
    width: 50%;
    /* padding-right: 2.5rem; */
    /* padding-left: 7.9rem; */

    @media (max-width: 56.25em) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`;

const HeroTitle = styled(Typography)`
    letter-spacing: 0.4em;
    color: var(--dodger-blue-900);
    padding-top: 0rem;

    /* margin: 48px 0px 0px; */
    @media (max-width: 84em) {
        //1344
        font-size: 2.5rem;
        line-height: 8rem;
    }
    @media (max-width: 56.25em) {
        //900
        padding-top: 3rem;
        align-items: center;
        text-align: center;
    }
    @media (max-width: 37.5em) {
        /* display: block;
        align-items: center; */
        font-size: 2.1rem;
    }

    @media (max-width: 25em) {
        display: block;
        font-size: 1.7rem;
        line-height: 4rem;
        margin-bottom: 1rem;
    }
`;

const YellowLine = styled.span`
    position: absolute;
    left: 0;
    bottom: -2%;

    z-index: -1;
    width: 50rem;
    height: 2.2rem;
    background-color: #ffbe62;
    @media (max-width: 61.75em) {
        //988
        width: 40%;
        left: 0;
    }

    @media (max-width: 56.25em) {
        //900
        width: 100%;
        left: 0;
    }
    @media (max-width: 37.5em) {
        //600
        width: 35%;
        left: 12rem;
    }
    @media (max-width: 26.75em) {
        //428
        width: 50%;
        left: 11rem;
        bottom: 1%;
    }

    @media (max-width: 25em) {
        //400
        width: 50%;
        left: 10rem;
    }
    @media (max-width: 24.0625em) {
        // 385px
        width: 50%;
        left: 5rem;
    }
`;
const HeroDescription = styled(Typography)`
    font-size: 4rem;
    /* line-height: 6rem; */
    display: flex;

    position: relative;
    z-index: 4;

    @media (max-width: 84em) {
        //1344
        font-size: 4rem;
        line-height: 3rem;
    }

    @media (max-width: 56.25em) {
        //900
        font-size: 4.5rem;
        line-height: 6rem;

        align-items: center;
        text-align: center;
    }
`;

const HeroParagraph = styled(Typography)`
    margin-bottom: var(--space-20);
    color: var(--black-400);
    line-height: 2.8rem;
    font-weight: 65rem;

    @media (max-width: 84em) {
        //1344
        font-size: 1.6rem;
        line-height: 3.5rem;
        margin-top: 2rem;
    }

    @media (max-width: 56.25em) {
        //900
        font-size: 2rem;
        line-height: 4rem;
        padding-bottom: 2rem;
        align-items: center;
        text-align: center;
    }

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

    @media (max-width: 56.25em) {
        //900
        /* margin-left: 12rem; */
        align-items: center;
        text-align: center;
        display: flex;
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
    width: 50%;
    text-align: right;

    transition: all 1s;
    &:hover {
        transform: scale(1.04);
    }

    img {
        object-fit: contain;
        /* height: 45rem; */
    }

    @media (max-width: 62.5em) {
        height: 50%;

        img {
            /* height: max-content; */
        }
    }
    @media (max-width: 56.25em) {
        width: 100%;
        text-align: center;
        align-items: center;

        img {
            width: 60%;
            text-align: center;
            align-items: center;
        }
    }
`;

//
const Hero = () => {
    return (
        <SectionsBase>
            <HeroContainer>
                <HeroSectionLeft>
                    <HeroTitle weight="bold" variant="h6" align="inherit">
                        HI, I AM KHULKAR
                    </HeroTitle>

                    <HeroDescription
                        weight="bold"
                        variant="displaySM"
                        align="left"
                    >
                        I am FullStack Developer
                        <YellowLine></YellowLine>
                    </HeroDescription>

                    <HeroParagraph
                        weight="semibold"
                        variant="subtitleSM"
                        align="left"
                    >
                        With a keen eye for detail and a passion for creating
                        seamless user experiences, I have crafted innovative
                        solutions that meet client requirements and exceed
                        expectations.
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
        </SectionsBase>
    );
};

export { Hero };
