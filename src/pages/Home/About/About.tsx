import { Typography, Icon } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import { data } from "./data";
import whiteLine from "../../../design-system/assets/image/line-decor-white.png";
import ellipse from "../../../design-system/assets/image/ELLIPSE.png";
import ellipseYellow from "../../../design-system/assets/image/ELLIPSE-yellow.png";

const AboutSection = styled(PageContainer)`
    padding-left: 10rem;
    padding-right: 6rem;
    align-items: center;
    display: flex;

    background-color: var(--black-200);
`;

const AboutLeftWrapper = styled.div`
    width: 60rem;
    height: 59rem;
    border-radius: var(--space-8);
    background-color: var(--black-100);
`;

const AboutSectionLeft = styled.div`
    max-width: 64.5rem;
`;

const AboutTitle = styled(Typography)`
    padding-left: 10.7rem;
    /* padding-top: 16rem; */

    color: var(--white);
    padding-bottom: var(--space-20);
    padding-right: 17.9rem;
`;
const AboutDescription = styled(Typography)`
    padding-left: 10.8rem;
    padding-right: 10.7rem;
    /* font-size: 5rem;
    line-height: 5.5rem; */
    display: block;
    align-items: center;
    text-align: left;
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
    padding-top: 12.1rem;
    padding-left: 48rem;
`;

const AboutYellowEllipse = styled.div`
    padding-left: 9.1rem;
    padding-bottom: 4rem;
`;

const AboutSectionRight = styled.div`
    width: 63rem;
    height: 59rem;
    border-radius: var(--space-8);
    margin-left: 3.5rem;
`;
const AboutCard = styled.div`
    padding-left: 3.6rem;
    height: 16rem;
    /* margin-bottom: 4rem; */
    border: 2px solid black;
    border-radius: var(--space-8);
    margin-bottom: 5rem;
`;

const AboutIcon = styled.img`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 1rem;

    width: auto;
    height: 4rem;
    padding-left: 3.2rem;
`;
const RightIconWrapper = styled.div`
    display: flex;
`;
const RightTextWrapper = styled.div`
    padding-right: 1rem;
`;
const AboutTitleRight = styled(Typography)`
    padding-left: 3.2rem;
    color: var(--black-100);

    padding-bottom: var(--space-20);
`;

const AboutDescriptionRight = styled(Typography)`
    padding-left: 3.2rem;
    padding-right: 10.7rem;
    align-items: center;
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
                    <AboutTitle
                        weight="bold"
                        variant="paragraphSM"
                        align="inherit"
                    >
                        About Me
                    </AboutTitle>
                    <AboutDescription weight="normal" variant="h6" align="left">
                        I am software engineer located in Virginia.
                    </AboutDescription>
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
