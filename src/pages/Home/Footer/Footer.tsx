import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/Frame16.png";
import email from "../../../design-system/assets/image/Frame15.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";
import yellow from "../../../design-system/assets/image/HIGHLIGHT-md.png";
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

    margin-top: 8rem;
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
    border-radius: var(--space-12);
    background-color: var(--dodger-blue-200);

    padding: 7rem 7rem;

    @media (max-width: 25em) {
        padding: 3rem 1rem;
    }
`;

const YellowLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 4%;
    z-index: -1;
    width: 50%;
    height: 2.2rem;
    background-color: #ffbe62;

    @media (max-width: 45.87em) {
        width: 20rem;
    }
    @media (max-width: 26.75em) {
        width: 40%;
        left: 0;
    }
    /*
    @media (max-width: 25em) {
        width: 30%;
        left: 3rem;
    }

    @media (max-width: 24.375em) {
        //390px
        width: 40%;
        left: 5rem;
    }
    @media (max-width: 24.375em) {
        //370px
        width: 40%;
        left: 5rem;
    }*/
`;

const FooterTitle = styled(Typography)`
    font-size: 7rem;
    line-height: 9rem;
    display: block;

    position: relative;
    z-index: 4;

    @media (max-width: 31.25em) {
        //500px
        font-size: 5rem;
        line-height: 5rem;
    }
`;

const FooterLinkWrapper = styled.div`
    display: flex;

    @media (max-width: 50em) {
        display: block;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    @media (max-width: 27.5em) {
        padding-left: 0;
        line-height: 2rem;
        display: block;
        font-size: 2rem;
    }
`;

const ContactWrapper = styled.div`
    /* background-color: darkturquoise; */
    display: flex;
    margin-top: 5rem;

    line-height: 3rem;
    font-weight: bold;
    font-size: 2.4rem;
    text-align: left;
    align-items: left;

    @media (max-width: 50em) {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;

        img {
            width: 50px; // Adjust the width of the images here
            height: auto; // Maintain aspect ratio
        }
    }
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
    const [showCreateUsContact, setShowCreateUsContact] = useState(false);

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
                        <FooterTitle weight="bold" variant="h2" align="left">
                            Have a project idea to collaborate with?
                            <YellowLine></YellowLine>
                        </FooterTitle>
                        <FooterLinkWrapper>
                            <Buttons>
                                <Button
                                    color="secondary"
                                    size="lg"
                                    shape="circle"
                                    variant="outlined"
                                    onClick={() => setShowCreateUsContact(true)}
                                >
                                    Contact Us
                                </Button>
                            </Buttons>
                        </FooterLinkWrapper>
                        <ContactWrapper>
                            <img src={email} alt="email" />
                            <StyledLink href="mailto:sharipovah01@gmail.com">
                                sharipovah01@gmail.com
                            </StyledLink>
                            <img src={phone} alt="phone" />
                            <StyledLink href="tel:+15714242397">
                                +1 571 424 2397
                            </StyledLink>
                        </ContactWrapper>
                    </FooterWrapper>

                    <SocialMedia>
                        <Icon iconName="instagram" />
                        <Icon iconName="github-icon" />
                        <Icon iconName="linkedin-svgrepo-com" />
                    </SocialMedia>
                </FooterSection>

                <CreateContactUsModal
                    show={showCreateUsContact}
                    closeModal={() => setShowCreateUsContact(false)}
                />

                {/* <ContactForm
                show={showCreateUsContact}
                closeModal={() => setShowCreateUsContact(false)}
            /> */}
            </SectionsBase>
        </>
    );
};

export { Footer };
