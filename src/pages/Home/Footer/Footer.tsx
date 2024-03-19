import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/phone-icon.png";
import email from "../../../design-system/assets/image/email-icon.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";

const FooterSection = styled(PageContainer)`
    /* padding-top: 8.5rem;
    padding-bottom: 8.6rem; */

    @media (max-width: 37.5em) {
        //600
        margin-bottom: 2rem;
    }
`;

const FooterWrapper = styled.div`
    text-align: left;
    /* height: 42.7rem; */
    border-radius: var(--space-8);
    background-color: var(--dodger-blue-200);

    padding-left: 12.3rem;
    padding-top: 8.6rem;
    padding-bottom: 5rem;
    padding-right: 10rem;

    @media (max-width: 25em) {
        //400
        margin-bottom: 1.5rem;
    }
`;

const FooterTitle = styled(Typography)`
    margin-bottom: 4rem;

    @media (max-width: 37.5em) {
        //600
        line-height: 3rem;
        font-size: 2.5rem;
    }

    @media (max-width: 25em) {
        //400
        /* display: flex;
        align-items: left; */
        line-height: 2.5rem;
        font-size: 2.5rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
    }
`;

const FooterLinkWrapper = styled.div`
    display: block;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 64em) {
        display: block;
        align-items: right;
    }

    /* @media (max-width: 25em) {
        //400
        align-items: right;
        line-height: 1.5rem;
        font-size: 2.2rem;
    } */
`;

const Buttons = styled.div`
    margin-bottom: 3rem;

    display: flex;
    align-items: center;
`;

const StyledLink = styled.a`
    font-size: 2.5rem;

    display: inline-block;
    gap: 5rem;
    color: var(--black-700);
    align-items: right;
    text-align: right;
    /* background-color: seagreen; */

    //1104
    @media (max-width: 69em) {
        display: flex;
    }

    //1024
    @media (max-width: 64em) {
        display: block;
        align-items: right;
        text-align: right;
        line-height: 3.2rem;
        font-size: 1.8rem;
    }

    @media (max-width: 25em) {
        //400
        display: block;
        align-items: center;
        line-height: 3.5rem;
        font-size: 2rem;
    }
`;

const ContactWrapper = styled.div`
    display: block;
    justify-content: space-between;
    text-align: right;
    align-items: right;
    /* 
    background-color: plum; */

    @media (max-width: 64em) {
        //1024

        display: block;
        align-items: right;
        text-align: right;
    }
    @media (max-width: 25em) {
        //400
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
            <FooterSection>
                <FooterWrapper>
                    <FooterTitle weight="bold" variant="h2" align="inherit">
                        Have a project idea to collaborate with?{" "}
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
        </>
    );
};

export { Footer };
