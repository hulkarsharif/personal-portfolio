import { Button, Icon, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import phone from "../../../design-system/assets/image/phone-icon.png";
import email from "../../../design-system/assets/image/email-icon.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";

const FooterSection = styled(PageContainer)`
    /* display: block;
    align-items: center;
    border-radius: var(--space-8); */
    padding-top: 8.5rem;
    padding-bottom: 8.6rem;
`;

const FooterWrapper = styled.div`
    text-align: left;
    /* height: 42.7rem; */
    border-radius: var(--space-8);
    background-color: var(--green-600);

    padding: 8.6rem 15rem;
`;

const FooterTitle = styled(Typography)`
    padding-bottom: 4rem;
    margin-bottom: 4rem;
`;

const FooterLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: var(--space-30); */

    /* padding-top: 5rem; */
`;

const StyledLink = styled.a`
    font-size: 1.8rem;
    display: flex;
    color: var(--white);
    align-items: center;
    text-align: center;
    /* gap: var(--space-20); */
`;

const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-20);
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
                    <FooterTitle weight="bold" variant="h3" align="inherit">
                        Have a project idea to collaborate with?{" "}
                    </FooterTitle>
                    <FooterLinkWrapper>
                        <Button
                            color="secondary"
                            size="lg"
                            shape="circle"
                            variant="outlined"
                            onClick={() => setShowCreateUsContact(true)}
                        >
                            Contact Us
                        </Button>
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
