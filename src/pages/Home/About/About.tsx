import { Typography, Icon } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import { data } from "./data";
import whiteLine from "../../../design-system/assets/image/line-decor-white.png";
import ellipse from "../../../design-system/assets/image/ELLIPSE.png";
import ellipseYellow from "../../../design-system/assets/image/ELLIPSE-yellow.png";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;

    @media (max-width: 56.25em) {
        //900
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    @media (max-width: 81.25em) {
        //1300

        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;

const AboutBase = styled(PageContainer)`
    align-items: stretch;
    display: flex;
    gap: var(--space-30);

    @media (max-width: 57em) {
        //912
        display: block;
    }
    @media (max-width: 56.25em) {
        //900
        display: block;
    }
`;

const AboutLeftWrapper = styled.div`
    width: 50%;
    border-radius: var(--space-8);
    background-color: var(--black-100);
    position: relative;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding: 9rem 10rem;

    /* padding-right: 10rem;
    padding-left: 10rem; */
    /* padding: 15.4rem 10.1rem 31rem 10.1rem; */

    @media (max-width: 64em) {
        width: 60%;
        //1104
    }
    @media (max-width: 62.5em) {
        width: 55%;
        //1104
    }

    @media (max-width: 57em) {
        //912
        width: 100%;
        display: inline-block;
        align-items: stretch;
        gap: var(--space-30);
        margin-bottom: 2rem;
        padding-top: 20rem;
        padding-bottom: 20rem;
    }
    @media (max-width: 56.25em) {
        //900
        width: 100%;
        display: inline-block;
        align-items: stretch;
        gap: var(--space-30);
        margin-bottom: 2rem;
        padding-top: 20rem;
        padding-bottom: 20rem;
    }
    /*
    @media (max-width: 56.12em) {
        //834
        width: 100%;
    }

    @media (max-width: 25.75em) {
        //412
        padding: 13rem 3rem;
    }

    @media (max-width: 25.75em) {
        //412
        padding: 15rem 3rem;
    }*/
`;

const AboutTitle = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-20);
`;

const AboutParagraph = styled(Typography)`
    color: var(--black-400);
    line-height: 2.5rem;
    margin-bottom: 4rem;
`;

const WhiteLine = styled.div`
    @media (max-width: 32em) {
        //512
        display: none;
    }
`;

const AboutEllipseBlueWrapper = styled.div`
    position: absolute;
    top: 11.3rem;
    right: 11.7rem;
`;

const AboutYellowEllipse = styled.div`
    position: absolute;
    left: 9.1rem;
    bottom: 4rem;
`;

const AboutSectionRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    /* > *:not(:last-child) {
        margin-bottom: var(--space-30);
    } */
    @media (max-width: 64em) {
        //1104
        width: 60%;
    }

    @media (max-width: 57em) {
        //912
        width: 100%;
    }
    @media (max-width: 56.25em) {
        //900
        width: 100%;
    }

    @media (max-width: 56.12em) {
        //834

        width: 100%;
    }
`;
const AboutCard = styled.div`
    padding: 3.6rem;
    height: max-content;
    border: 1px solid var(--jaguar-300);
    border-radius: var(--space-8);

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
    margin-bottom: var(--space-24);

    @media (max-width: 75em) {
        line-height: 2.1rem;
        font-size: 2.1rem;
    }
    @media (max-width: 68.75em) {
        line-height: 4.5rem;
        font-size: 2.2rem;
    }

    @media (max-width: 62.5em) {
        line-height: 3rem;
        font-size: 2.2rem;
    }
    @media (max-width: 64em) {
        //1024
        line-height: 2.8rem;
        font-size: 2rem;
    }

    @media (max-width: 57.875em) {
        //926px
        line-height: 2.5rem;
        font-size: 2rem;
    }

    @media (max-width: 56.25em) {
        //1000px
        line-height: 1.8rem;
        font-size: 2rem;
    }

    @media (max-width: 25em) {
        display: flex;
        line-height: 1rem;
        font-size: 1rem;
    }
`;

const AboutDescriptionRight = styled(Typography)`
    align-items: center;
    text-align: left;
    line-height: 1.8rem;
    font-weight: 60rem;
    font-size: 2rem;

    @media (max-width: 64em) {
        //1024
        line-height: 2.9rem;
        font-size: 2rem;
    }

    @media (max-width: 57.87em) {
        //926px
        line-height: 2.5rem;
        font-size: rem;
    }
    @media (max-width: 56.25em) {
        line-height: 4rem;
        font-size: 2.2rem;
    }

    @media (max-width: 25em) {
        display: flex;
        line-height: 2rem;
        font-size: 1rem;
    }
`;

const About = () => {
    return (
        <SectionsBase>
            <AboutBase>
                <AboutLeftWrapper>
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
                                    weight="semibold"
                                >
                                    {item.description}
                                </AboutDescriptionRight>
                            </RightTextWrapper>
                        </AboutCard>
                    ))}
                </AboutSectionRight>
            </AboutBase>
        </SectionsBase>
    );
};

export { About };
