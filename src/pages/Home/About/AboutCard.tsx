import { Button, Icon, Input, Typography } from "../../../design-system";
import styled from "styled-components";
import { PageContainer } from "../../components";
import { aboutInfo } from "./data";

import www from "../../../design-system/assets/image/www-icon.png";
import devIcon from "../../../design-system/assets/image/dev-icon.png";
import digitalService from "../../../design-system/assets/image/digital-services-icon.png";

type AboutFeature = {
    icon: string;
    title: string;
    description: string;
};

type AboutCardProps = {
    info: AboutFeature;
};

export const AboutsCardBase = styled.div<{ icon: string }>`
    border-radius: var(--border-radius-24);
    padding: var(--space-8);
    box-shadow: var(--shadow-xs);
    /* margin-left: 76px;
    margin-bottom: 70px; */

    max-width: 37rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: opasity 0.5s;
    background-color: ${({ icon }) => {
        switch (icon) {
            case www:
                return "var(--green-25)";
            case devIcon:
                return "var(--sunglow-25)";
            case digitalService:
                return "var(--primary-25)";
        }
    }};

    & > img {
        width: 10.8rem;
        height: 10.8rem;
        justify-content: space-between;

        margin-top: var(--space-40);
        margin-bottom: var(--space-40);
    }
`;
const AboutTextWrapper = styled.div`
    max-width: 35rem;
    padding: var(--space-24);
    border-radius: var(--border-radius-24);
    background-color: var(--white);
`;

const AboutTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const AboutDescription = styled(Typography)`
    color: var(--jaguar-500);
    font-size: var(--space-20);
`;

const AboutCard = ({ info }: AboutCardProps) => {
    return (
        <AboutsCardBase icon={info.icon}>
            <img src={info.icon} alt="Feature Icon" />
            <AboutTextWrapper>
                <AboutTitle variant="paragraphLG" weight="semibold">
                    {info.title}
                </AboutTitle>
                <AboutDescription variant="subtitleLG" weight="medium">
                    {info.description}
                </AboutDescription>
            </AboutTextWrapper>
        </AboutsCardBase>
    );
};

export { AboutCard };
