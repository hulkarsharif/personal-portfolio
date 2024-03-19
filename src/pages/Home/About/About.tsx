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
        display: block;
    }
    //834px
    @media (max-width: 52.125em) {
    }

    //600px
    @media (max-width: 37.5em) {
        align-items: center;
        display: block;
    }

    @media (max-width: 25em) {
        //400
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

    @media (max-width: 84em) {
        //1344
        width: 50rem;
    }

    @media (max-width: 81.25em) {
        //1300
        width: 60rem;
    }

    @media (max-width: 75em) {
        //1200
        width: 68%;
    }
    //1100
    @media (max-width: 68.75em) {
        max-width: 60%;
    }
    //1000px
    @media (max-width: 62.5em) {
        max-width: 65%;
    }
    //900
    @media (max-width: 56.25em) {
        width: 100%;
    }
    //834px
    @media (max-width: 52.125em) {
        display: block;
    }

    @media (max-width: 37.5em) {
        width: 100%;
    }

    @media (max-width: 25em) {
        /* width: 36rem; */
        height: 28rem;
        padding-top: 3.6rem;
        padding-left: 3.6rem;

        /* width: 100%; */
    }
    @media (max-width: 24.375em) {
        /* width: 36rem; */
        height: 28rem;
        padding-top: 3.2rem;
        padding-left: 3.2rem;

        /* width: 100%; */
    }
`;

const AboutTitle = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-20);

    @media (max-width: 25em) {
        //390
        margin-top: 0.5rem;
    }
`;

const AboutParagraph = styled(Typography)`
    color: var(--black-400);
    line-height: 2.5rem;
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

    @media (max-width: 25em) {
        display: none;
    }
`;

const AboutEllipseBlueWrapper = styled.div`
    position: absolute;
    top: 11.3rem;
    right: 11.7rem;
    @media (max-width: 62.5em) {
        /* padding-right: 48rem; */
    }

    @media (max-width: 25em) {
        top: 5rem;
    }
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

    > *:not(:last-child) {
        margin-bottom: var(--space-20);
    }
    //1344
    @media (max-width: 84em) {
        width: 70rem;
    }
    //1300
    @media (max-width: 81.25em) {
        width: 60rem;
    }

    @media (max-width: 75em) {
        //1200
        width: 60%;
    }
    //1100
    @media (max-width: 68.75em) {
        width: 45%;
    }
    //1000px
    @media (max-width: 62.5em) {
        background-color: yellow;
        max-width: 40%;
    }
    /*
    @media (max-width: 56.15em) {
        width: 100%;
    }

    @media (max-width: 56.125em) {
        width: 40%;
    }
    */
    @media (max-width: 56.25em) {
        margin-top: 2rem;
        width: 100%;
    }

    @media (max-width: 37.5em) {
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

    @media (max-width: 68.75em) {
        display: flex;
        line-height: 3rem;
        font-size: 1.2rem;
    }

    @media (max-width: 62.5em) {
        line-height: 3rem;
        font-size: 2.2rem;
    }
    @media (max-width: 64em) {
        line-height: 1.5rem;
        font-size: 1rem;
    }

    @media (max-width: 56.25em) {
        //1000px
        line-height: 3.5rem;
        font-size: 2.2rem;
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
