import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/phone-icon.png";
import email from "../../../design-system/assets/image/email-icon.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";
import yellow from "../../../design-system/assets/image/HIGHLIGHT-md.png";
import BigCircle from "../../../design-system/assets/image/ELLIPSE-cr-lg.png";
import CircleMd from "../../../design-system/assets/image/ELLIPSE-cr-md.png";
import circle from "../../../design-system/assets/image/ELLIPSE-cr.png";

const SectionsBase = styled.section`
    padding-left: 9.55rem;
    padding-right: 9.55rem;
`;
const FooterSection = styled(PageContainer)`
    position: relative;
    @media (max-width: 37.5em) {
        margin-bottom: 2rem;
    }
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
    /* padding-top: 8rem;
    padding-bottom: 5rem;

    padding-right: 9.55rem;
    padding-left: 9.55rem; */

    @media (max-width: 64em) {
        padding-right: 12rem;
    }

    @media (max-width: 37.5em) {
        padding: 8.6rem 2rem 5rem;
    }
`;

const FooterTitle = styled(Typography)`
    margin-bottom: 4rem;
    font-size: 7rem;
    line-height: 9rem;

    position: relative;
    z-index: 4;

    @media (max-width: 37.5em) {
        line-height: 3rem;
        font-size: 2.5rem;
    }

    @media (max-width: 25em) {
        font-size: 2rem;
    }
`;

const YellowLine = styled.span`
    position: absolute;
    left: 50%;
    bottom: -5%;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;
`;
const FooterLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;

    @media (max-width: 64em) {
        display: block;
        align-items: right;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: left;
    /* margin-bottom: 10rem; */
`;

const StyledLink = styled.a`
    /* padding-right: 6rem; */
    display: inline-block;
    padding: 1rem;
    justify-content: space-between;
    font-size: 2rem;
    color: var(--white);
    display: flex;

    @media (max-width: 69em) {
        display: flex;
    }

    @media (max-width: 64em) {
        display: block;
        align-items: right;
        text-align: right;
        line-height: 3.2rem;
        font-size: 1.8rem;
    }

    @media (max-width: 25em) {
        display: block;
        align-items: center;
        line-height: 3.5rem;
        font-size: 2rem;
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    padding: 5rem;
    padding-right: 1rem;
    align-items: left;
    line-height: 1rem;
    /* color: var(--white); */
    font-weight: bolder;
    text-align: start;

    /* img {
        filter: brightness(40%);
    } */

    @media (max-width: 64em) {
        display: block;
        align-items: right;
        text-align: right;
    }

    @media (max-width: 25em) {
        display: block;
        align-items: right;
        line-height: 3.5rem;
        font-size: 2rem;
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
                        <FooterTitle weight="bold" variant="h2" align="inherit">
                            Have a project idea to collaborate with?
                            {/* <YellowLine>
                                <img src={yellow} alt="yellow" />
                            </YellowLine> */}
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
                        </FooterLinkWrapper>
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
