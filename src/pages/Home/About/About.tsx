import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
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

const AboutSectionRight = styled.div`
    width: 63rem;
    height: 59rem;
    border-radius: var(--space-8);

    margin-left: 3.5rem;
    background-color: #656868;
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
//
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
                    <AboutDescription
                        weight="normal"
                        variant="paragraphMD"
                        align="left"
                    >
                        Aboutd software engeneer located in Virginia.
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

            <AboutSectionRight></AboutSectionRight>
        </AboutSection>
    );
};

export { About };
