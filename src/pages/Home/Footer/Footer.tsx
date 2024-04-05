import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/Frame16.png";
import email from "../../../design-system/assets/image/Frame15.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";
import BigCircle from "../../../design-system/assets/image/ELLIPSE-cr-lg.png";
import CircleMd from "../../../design-system/assets/image/ELLIPSE-cr-md.png";
import circle from "../../../design-system/assets/image/ELLIPSE-cr.png";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;

    @media (max-width: 81.25em) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media (max-width: 56.25em) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media (max-width: 26.87em) {
    }
`;
const FooterSection = styled(PageContainer)`
    position: relative;
    margin-top: 3rem;
`;

const Circle = styled.span`
    position: absolute;
    right: 3.4rem;
    bottom: 45rem;
`;

const CircleLarge = styled.span`
    position: absolute;
    top: 8rem;
    right: 0;
`;

const MediumCircle = styled.span`
    position: absolute;
    left: 0;
    top: 4rem;
`;
const FooterWrapper = styled.div`
    text-align: left;
    border-radius: 2.4rem;
    background-color: var(--dodger-blue-200);
    padding: 8rem;

    @media (max-width: 35em) {
        padding: 7rem 4rem;
    }
`;

const YellowLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 4%;
    z-index: -1;
    width: 80%;
    height: 2.2rem;
    background-color: #ffbe62;

    @media (max-width: 44.95em) {
        //719

        width: 30%;
        left: 1rem;
    }
`;

const FooterTitle = styled(Typography)`
    /* font-size: 6.5rem; */
    /* line-height: 1.2em; */
    display: inline-block;

    position: relative;
    z-index: 4;

    @media (max-width: 25em) {
    }

    @media (max-width: 20em) {
        /* font-size: 3rem;
        line-height: 3rem; */
    }
`;

const FooterLinkWrapper = styled.div`
    display: flex;

    @media (max-width: 50em) {
        display: block;
    }
`;

const Buttons = styled.div`
    /* display: flex; */
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    z-index: 0;

    :hover {
        background-color: blue;
    }
`;

const StyledLink = styled.a`
    /* background-color: darkolivegreen; */
    padding: 1rem;
    justify-content: space-between;
    font-size: 2rem;
    line-height: 1rem;
    align-items: left;
    color: var(--black);
    @media (max-width: 50em) {
        display: block;
    }

    @media (max-width: 20em) {
        font-size: 1.5rem;
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    margin-top: 5rem;

    line-height: 3rem;
    font-weight: bold;
    font-size: 2.4rem;
    /* text-align: left;
    align-items: left; */
    @media (max-width: 50em) {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 20em) {
        //320
        display: block;
    }
`;

const IconWrapper = styled.div`
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
`;

const SocialMedia = styled.div`
    color: var(--black-900);
    gap: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 6.7rem;
    padding-top: 4.9rem;
    gap: var(--space-20);

    svg {
        cursor: pointer;
        margin-top: 1rem;
        transition: all 1s;

        &:hover {
            transform: scale(1.5);
        }
    }
`;

const Footer = () => {
    const [showCreateContactUs, setShowCreateContactUs] = useState(false);

    return (
        <>
            <SectionsBase>
                <FooterSection>
                    <FooterWrapper>
                        <Circle>
                            <img src={circle} alt="ellipse" />
                        </Circle>
                        <CircleLarge>
                            <img src={BigCircle} alt="circle" />
                        </CircleLarge>
                        <MediumCircle>
                            <img src={CircleMd} alt="circle" />
                        </MediumCircle>
                        <FooterTitle
                            weight="semibold"
                            variant="h3"
                            align="left"
                        >
                            Have a project idea to
                            <br /> collaborate with?
                            <YellowLine></YellowLine>
                        </FooterTitle>
                        <FooterLinkWrapper>
                            <Buttons>
                                <Button
                                    color="secondary"
                                    size="lg"
                                    shape="circle"
                                    variant="outlined"
                                    onClick={() => setShowCreateContactUs(true)}
                                >
                                    Contact Us
                                </Button>
                            </Buttons>
                        </FooterLinkWrapper>

                        <ContactWrapper>
                            <IconWrapper>
                                <img src={email} alt="email" />
                            </IconWrapper>
                            <StyledLink href="mailto:sharipovah01@gmail.com">
                                sharipovah01@gmail.com
                            </StyledLink>
                            <IconWrapper>
                                <img src={phone} alt="phone" />
                            </IconWrapper>
                            <StyledLink href="tel:+15714242397">
                                +1 571 424 2397
                            </StyledLink>
                        </ContactWrapper>
                    </FooterWrapper>

                    <SocialMedia>
                        <a href="https://twitter.com/home">
                            <Icon iconName="twitter" />
                        </a>

                        <a href="https://www.linkedin.com/in/hulkar-sharipova-1a75b0231/">
                            <Icon iconName="linkedin-svgrepo-com" />
                        </a>
                        <a href="https://github.com/hulkarsharif">
                            <Icon iconName="github-icon" />
                        </a>
                    </SocialMedia>
                </FooterSection>
            </SectionsBase>
            <CreateContactUsModal
                show={showCreateContactUs}
                closeModal={() => setShowCreateContactUs(false)}
            />
        </>
    );
};

export { Footer };
