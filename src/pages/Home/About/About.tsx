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

    //1000px//
    @media (max-width: 62.5em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* padding-left: 20rem; */

        :last-child {
            display: block;
            align-items: center;
        }
    }

    //900px//
    @media (max-width: 56.25em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* padding-left: 14rem; */

        :last-child {
            display: block;
            align-items: center;
        }
    }
    //834px
    @media (max-width: 52.125em) {
        /* padding-left: 20rem; */
        background-color: green;
    }

    //600px
    @media (max-width: 37.5em) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        /* padding-left: 1rem;
        padding-right: 1rem; */
        background-color: green;
    }
`;

const AboutLeftWrapper = styled.div`
    max-width: 60rem;
    height: 59rem;
    border-radius: var(--space-8);
    background-color: var(--black-100);
`;

const AboutSectionLeft = styled.div`
    align-items: center;
    /* max-width: 64.5rem; */
`;

const AboutTitle = styled(Typography)`
    padding-left: 10.7rem;
    /* padding-top: 16rem; */

    color: var(--white);
    padding-bottom: var(--space-20);
    padding-right: 18.5rem;
`;

const AboutParagraph = styled(Typography)`
    color: var(--black-400);
    padding-left: 10.8rem;
    padding-right: 10.7rem;
    padding-bottom: 3.8rem;
    padding-top: 3rem;
    line-height: 2.5rem;
`;

const WhiteLine = styled.div`
    padding-left: 10.8rem;
    padding-top: 3.8rem;
    padding-bottom: 3.7rem;
`;

const AboutEllipseBlueWrapper = styled.div`
    margin-top: 12.1rem;
    margin-left: 48rem;

    @media (max-width: 62.5em) {
        padding-right: 48rem;
    }
`;

const AboutYellowEllipse = styled.div`
    padding-left: 9.1rem;
    padding-bottom: 4rem;

    /* @media (max-width: 62.5em) {
        padding-right: 48rem;
    }*/
`;

const AboutSectionRight = styled.div`
    width: 63rem;
    height: 59rem;
    border-radius: var(--space-8);
    margin-left: 3.5rem;

    @media (max-width: 62.5em) {
        display: block;
        align-items: center;
        text-align: center;
    }
`;
const AboutCard = styled.div`
    padding: 3.6rem;
    height: 17.1rem;
    /* margin-bottom: 4rem; */
    border: 2px solid var(--jaguar-300);
    border-radius: var(--space-8);
    margin-bottom: 3.5rem;
    display: flex;
    transition: all 1s;

    &:hover {
        transform: scale(1.1);
    }
`;

const AboutIcon = styled.img`
    width: 6rem;
    object-fit: contain;

    /* height: auto; */
`;
const RightIconWrapper = styled.div`
    display: flex;
    margin-right: 3.2rem;
`;
const RightTextWrapper = styled.div`
    /* padding-right: 1rem; */
`;
const AboutTitleRight = styled(Typography)`
    color: var(--black-100);

    padding-bottom: var(--space-20);
`;

const AboutDescriptionRight = styled(Typography)`
    /* padding-left: 3.2rem;
    padding-right: 10.7rem; 
    align-items: center;*/
    text-align: left;
`;

const About = () => {
    return (
        <AboutSection>
            <AboutLeftWrapper>
                <AboutSectionLeft>
                    <AboutEllipseBlueWrapper>
                        <img src={ellipse} alt="ellipse" />
                    </AboutEllipseBlueWrapper>
                    <AboutTitle weight="normal" variant="h6" align="left">
                        Working Experience
                    </AboutTitle>

                    <AboutParagraph weight="semibold" variant="h4" align="left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur porro animi quidem at, veritatis quisquam
                        fugit deleniti doloremque id illo quam magni dolorum
                        amet nobis, quaerat eligendi rerum dolorem!
                    </AboutParagraph>

                    <WhiteLine>
                        <img src={whiteLine} alt="line" />
                    </WhiteLine>
                </AboutSectionLeft>
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
