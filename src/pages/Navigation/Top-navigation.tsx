import styled from "styled-components";
import { NavigationLink } from "./Links";

import { Button, Logo } from "../../design-system";
import { PageContainer } from "../components";

const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Landings", link: "https://info.com" },
    { text: "Pages", link: "https://facebook.com" },
    { text: "Docs", link: "https://info.com" },
    { text: "Help", link: "https://google.com" }
];

const Base = styled(PageContainer)`
    padding-top: 2.6rem;
    padding-bottom: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #bce4ecfc;
`;

const NavigationLinks = styled.header`
    display: flex;
    gap: var(--space-40);
`;

const TopNavigation = () => {
    return (
        <Base>
            <Logo size="sm" layout="horizontal" />
            <NavigationLinks>
                {links.map((link, idx) => (
                    <NavigationLink
                        key={idx}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
                <Button
                    variant="contained"
                    shape="rounded"
                    size="sm"
                    color="primary"
                    onClick={() => {}}
                >
                    Get it now
                </Button>
            </NavigationLinks>
        </Base>
    );
};

export { TopNavigation };
