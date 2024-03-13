import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import orange from "../../../design-system/assets/image/HIGHLIGHT.png";
import background from "../../../design-system/assets/image/BACKGROUND.png";

const FooterSection = styled(PageContainer)`
    display: block;
    align-items: center;
    border-radius: var(--space-8);
`;

const FooterWrapper = styled.div`
    border-radius: var(--space-8);
    background-color: var(--green-50);
`;

const FooterTitle = styled(Typography)`
    padding-top: 3rem;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 3rem;
`;
const ContactForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 16.9rem;
    margin-right: 16rem;
    padding: 5rem;

    background-color: var(--black-300);
    border-radius: var(--border-radius-8);

    gap: 4rem;

    > *:not(:last-child) {
        margin-bottom: var(--space-8);
    }
`;

const StyledTextarea = styled(Input)`
    grid-column: span 2;
    width: 100%;

    textarea {
        resize: none;
        height: 4rem;
        overflow: hidden;
    }
`;
const SocialMedia = styled.div`
    color: var(--black-900);
    gap: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        cursor: pointer;

        margin-top: 18rem;
        transition: all 1s;
        &:hover {
            transform: scale(1.5);
        }
    }
`;

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterWrapper>
                    <FooterTitle weight="bold" variant="h5" align="inherit">
                        Have a project? Contact me to collaborate
                    </FooterTitle>{" "}
                </FooterWrapper>

                <ContactForm>
                    <Input
                        type="text"
                        placeholder="First Name"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="tel"
                        placeholder="Phone number"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />

                    <StyledTextarea
                        type="textarea"
                        placeholder="Message or description"
                        shape="rounded"
                        size="lg"
                        value=""
                        onChange={() => {}}
                    />

                    <Button
                        size="md"
                        color="secondary"
                        shape="rounded"
                        variant="text"
                    >
                        Send
                    </Button>
                </ContactForm>

                <SocialMedia>
                    <Icon iconName="instagram" />
                    <Icon iconName="github-icon" />
                    <Icon iconName="linkedin-svgrepo-com" />
                </SocialMedia>
            </FooterSection>
        </>
    );
};

export { Footer };
