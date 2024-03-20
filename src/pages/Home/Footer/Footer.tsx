import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/phone-icon.png";
import email from "../../../design-system/assets/image/email-icon.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";

const FooterSection = styled(PageContainer)`
    @media (max-width: 37.5em) {
        margin-bottom: 2rem;
    }
`;

const FooterWrapper = styled.div`
    text-align: left;
    border-radius: var(--space-8);
    background-color: var(--dodger-blue-200);
    padding-left: 12.3rem;
    padding-top: 8.6rem;
    padding-bottom: 5rem;
    padding-right: 20rem;

    @media (max-width: 64em) {
        padding-right: 12rem;
    }

    @media (max-width: 37.5em) {
        padding: 8.6rem 2rem 5rem;
    }
`;

const FooterTitle = styled(Typography)`
    margin-bottom: 4rem;

    @media (max-width: 37.5em) {
        line-height: 3rem;
        font-size: 2.5rem;
    }

    @media (max-width: 25em) {
        font-size: 2rem;
    }
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
    padding-right: 5rem;
    display: inline-block;
    padding: 1rem;
    justify-content: space-between;
    font-size: 1.8rem;
    color: var(--black-900);
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
    font-size: 1.8rem;
    display: flex;
    padding: 5rem;
    padding-right: 1rem;
    align-items: left;
    font-size: 1.8rem;
    color: var(--black-900);
    font-weight: bold;
    text-align: start;

    img {
        filter: brightness(40%);
    }

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
            <FooterSection>
                <FooterWrapper>
                    <FooterTitle weight="bold" variant="h2" align="inherit">
                        Have a project idea to collaborate with?
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
