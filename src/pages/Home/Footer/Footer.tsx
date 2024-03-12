import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import orange from "../../../design-system/assets/image/HIGHLIGHT.png";

const FooterSection = styled(PageContainer)`
    display: block;
    align-items: center;

    border-radius: var(--space-8);
`;

const FooterWrapper = styled.div`
    /* width: 100%; */
    height: 42.7rem;
    padding-top: 8.6rem;
    padding-bottom: 8.5rem;
    padding-left: 12.3rem;
    padding-right: 33.8rem;
    border-radius: var(--space-8);
    background-color: var(--green-600);
`;

const FooterTitle = styled(Typography)`
    justify-content: space-between;
    padding-bottom: 4rem;
`;

const SocialMedia = styled.div`
    color: var(--black-900);
    gap: 3.6rem;
    display: flex;

    padding-bottom: 6.7rem;

    svg {
        cursor: pointer;

        margin-top: 4rem;
        transition: all 1s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <FooterTitle weight="bold" variant="h3" align="inherit">
                    Have a project idea to collaborate with?
                    <img src={orange} alt="orange" />
                </FooterTitle>

                <a href="mailto:sharipovah01@gmail.com">
                    <Button
                        size="sm"
                        color="success"
                        shape="circle"
                        variant="outlined"
                    >
                        Contact me
                    </Button>
                </a>
            </FooterWrapper>
            <SocialMedia>
                <Icon iconName="instagram" />
                <Icon iconName="github-icon" />
                <Icon iconName="linkedin-svgrepo-com" />
            </SocialMedia>
        </FooterSection>
    );
};

export { Footer };
