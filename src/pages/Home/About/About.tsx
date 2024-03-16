import { Typography, Icon } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import { data } from "./data";
import whiteLine from "../../../design-system/assets/image/line-decor-white.png";
import ellipse from "../../../design-system/assets/image/ELLIPSE.png";
import ellipseYellow from "../../../design-system/assets/image/ELLIPSE-yellow.png";

const AboutSection = styled(PageContainer)`
    align-items: center;
    display: flex;
    gap: var(--space-30);

    //1000px//
    @media (max-width: 62.5em) {
        display: flex;
    }

    //900px//
    @media (max-width: 56.25em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        padding-left: 12rem;

        :last-child {
            display: block;
            align-items: center;
        }
    }
    //834px
    @media (max-width: 52.125em) {
        /* padding-right: 25rem; */
    }

    //600px
    @media (max-width: 37.5em) {
        align-items: center;
        /* padding-left: 1rem;
        padding-right: 5rem;
        padding-bottom: 15rem; */
    }

    @media (max-width: 25em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
    }
`;

const AboutLeftWrapper = styled.div`
    width: 50%;
    /* height: 59rem; */
    border-radius: var(--space-8);
    background-color: var(--black-100);
    align-items: center;
    position: relative;
    padding: 15.4rem 10.1rem 32.2rem 10.1rem;

    @media (max-width: 62.5em) {
        width: 80rem;
    }
    @media (max-width: 37.5em) {
        max-width: 55rem;
        align-items: center;
    }
`;

const AboutTitle = styled(Typography)`
    /* padding-left: 10.7rem; */
    /* padding-top: 16rem; */

    color: var(--white);
    margin-bottom: var(--space-20);
    /* padding-right: 18.5rem; */
`;

const AboutParagraph = styled(Typography)`
    color: var(--black-400);
    /* padding-left: 10.8rem;
    padding-right: 10.7rem;
    padding-bottom: 3.8rem;
    padding-top: 3rem; */
    line-height: 2.5rem;
    /* margin-bottom: 3.7rem; */
`;

const WhiteLine = styled.div`
    position: absolute;
    left: 10.2rem;
    bottom: 11.3rem;
    @media (max-width: 68.75em) {
        position: absolute;
        left: 5.2rem;
        bottom: 11.3rem;
    }

    /* padding-left: 10.8rem;
    padding-top: 3.8rem;
    padding-bottom: 3.7rem; */
`;

const AboutEllipseBlueWrapper = styled.div`
    /* margin-top: 12.1rem;
    margin-left: 48rem; */
    position: absolute;
    top: 11.3rem;
    right: 11.7rem;
    @media (max-width: 62.5em) {
        padding-right: 48rem;
    }
`;

const AboutYellowEllipse = styled.div`
    position: absolute;
    left: 9.1rem;
    bottom: 4rem;

    /* @media (max-width: 62.5em) {
        padding-right: 48rem;
    }*/
`;

const AboutSectionRight = styled.div`
    /* background-color: #ff00ee; */
    width: 50%;
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
        margin-bottom: var(--space-20);
    }

    /* height: 59rem; */

    /* margin-left: 3.5rem; */
    @media (max-width: 68.75em) {
        > *:not(:last-child) {
            margin-bottom: var(--space-80);
        }
    }

    @media (max-width: 62.5em) {
        margin-left: 0;
        display: flex;
    }
`;
const AboutCard = styled.div`
    padding: 3.6rem;
    height: max-content;
    border: 1px solid var(--jaguar-300);
    border-radius: var(--space-8);
    /* margin-bottom: 3.5rem; */
    display: flex;
    /*transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }*/
`;

const AboutIcon = styled.img`
    width: 6rem;
    object-fit: contain;
`;
const RightIconWrapper = styled.div`
    display: flex;
    margin-right: 1.5rem;
`;

const RightTextWrapper = styled.div`
    padding-right: 8rem;
`;

const AboutTitleRight = styled(Typography)`
    margin-bottom: var(--space-10);

    @media (max-width: 75em) {
        /* line-height: 2rem;
        font-size: 2rem; */
    }

    @media (max-width: 68.75em) {
        line-height: 2rem;
        font-size: 2rem;
    }
    @media (max-width: 6.25em) {
        line-height: 1.5rem;
        font-size: 1rem;
    }
`;

const AboutDescriptionRight = styled(Typography)`
    align-items: center;
    text-align: left;
`;

const About = () => {
    return (
        <AboutSection>
            <AboutLeftWrapper>
                <AboutEllipseBlueWrapper>
                    <img src={ellipse} alt="ellipse" />
                </AboutEllipseBlueWrapper>
                <AboutTitle weight="normal" variant="h6" align="left">
                    Working Experience
                </AboutTitle>

                <AboutParagraph weight="semibold" variant="h4" align="left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur porro animi quidem at, veritatis quisquam fugit
                    deleniti doloremque id illo quam magni dolorum amet nobis,
                    quaerat eligendi rerum dolorem!
                </AboutParagraph>

                <WhiteLine>
                    <img src={whiteLine} alt="line" />
                </WhiteLine>
                <AboutYellowEllipse>
                    <img src={ellipseYellow} alt="yellow" />
                </AboutYellowEllipse>
            </AboutLeftWrapper>

            <AboutSectionRight>
                {data.map((item, index) => (
                    <AboutCard key={index}>
                        <RightIconWrapper>
                            <AboutIcon src={item.icon} />
                        </RightIconWrapper>
                        <RightTextWrapper>
                            <AboutTitleRight variant="h6" weight="semibold">
                                {item.title}
                            </AboutTitleRight>
                            <AboutDescriptionRight
                                variant="paragraphSM"
                                weight="normal"
                            >
                                {item.description}
                            </AboutDescriptionRight>
                        </RightTextWrapper>
                    </AboutCard>
                ))}
            </AboutSectionRight>
        </AboutSection>
    );
};

export { About };
