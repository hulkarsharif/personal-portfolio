import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import orange from "../../../design-system/assets/image/HIGHLIGHT.png";
import background from "../../../design-system/assets/image/BACKGROUND.png";
import { useState } from "react";
import { CreateContactUsModal } from "./createContactUsModal";

const FooterSection = styled(PageContainer)`
    display: block;
    align-items: center;

    border-radius: var(--space-8);
`;

const FooterWrapper = styled.div`
    height: 42.7rem;
    border-radius: var(--space-8);
    background-color: var(--green-600);
    padding-left: 15.3rem;
`;

const FooterTitle = styled(Typography)`
    padding-top: 3rem;
    justify-content: space-between;
    text-align: left;
    padding-top: 8.6rem;
    padding-bottom: 3rem;
    padding-right: 33.8rem;
`;
// const ContactForm = styled.form`
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     margin-left: 16.9rem;
//     margin-right: 16rem;
//     padding: 5rem;

//     background-color: var(--black-300);
//     border-radius: var(--border-radius-8);

//     gap: 4rem;

//     > *:not(:last-child) {
//         margin-bottom: var(--space-8);
//     }
// `;

// const StyledTextarea = styled(Input)`
//     grid-column: span 2;
//     width: 100%;

//     textarea {
//         resize: none;
//         height: 4rem;
//         overflow: hidden;
//     }
// `;
const SocialMedia = styled.div`
    color: var(--black-900);
    gap: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 6.7rem;
    padding-top: 4.9rem;

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
                    </FooterTitle>{" "}
                    <Button
                        color="secondary"
                        size="lg"
                        shape="circle"
                        variant="outlined"
                        onClick={() => setShowCreateUsContact(true)}
                    >
                        Contact Us
                    </Button>
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
