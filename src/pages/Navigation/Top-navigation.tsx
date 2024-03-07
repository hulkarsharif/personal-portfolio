import styled from "styled-components";
import { NavigationLink } from "./Links";
import logoMe from "../../design-system/assets/image/22222.png";
import { PageContainer } from "../components";

const links = [
    { text: "HOME", link: "https://google.com" },
    { text: "PROJECTS", link: "https://info.com" },
    { text: "ABOUT", link: "https://facebook.com" }
    // { text: "CONTACTS", link: "mailto:sharipovah01@gmail.com" }
];

const Base = styled(PageContainer)`
    padding-top: 2.4rem;
    padding-left: 8.6rem;
    padding-right: 10.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationLinks = styled.div`
    max-width: 124rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: var(--space-20);
`;
const LogoWrapper = styled.div`
    height: 4.5rem;
    align-items: center;
`;

const TopNavigation = () => {
    return (
        <Base>
            <LogoWrapper>
                <img src={logoMe} alt="Logo" />
            </LogoWrapper>
            <NavigationLinks>
                {links.map((link, idx) => (
                    <NavigationLink
                        key={idx}
                        linkText={link.text}
                        linkTo={link.link}
                    />
                ))}
            </NavigationLinks>
        </Base>
    );
};

export { TopNavigation };
