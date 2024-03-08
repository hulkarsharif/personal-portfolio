import styled, { css } from "styled-components";
import { documents } from "./data";
import { Typography, Icon } from "../../../design-system";

import docIcon from "../../../design-system/Icon/sprite.svg";
import searchIcon from "../../../design-system/Icon/sprite.svg";
import upArrow from "../../../design-system/Icon/sprite.svg";
import playIcon from "../../../design-system/Icon/sprite.svg";

type IconName = "doc-icon" | "search-icon" | "up-arrow" | "play-icon";

export type Service = {
    icon: IconName;
    title: string;
    description: string;
};

type ServiceCardProps = {
    item: Service;
};

export const ServiceCardBase = styled.div`
    border-radius: var(--border-radius-16);
    padding: var(--space-8);
    box-shadow: var(--shadow-xs);

    width: 28rem;
    height: 35rem;
    padding-left: var(--space-30);
    padding-top: var(--space-30);
    padding-bottom: 11.4rem;

    flex-direction: column;
    align-items: center;
    background-color: var(--black-50);

    & > img {
        /* width: 10.8rem;
        height: 10.8rem; */
        justify-content: space-between;
    }
`;
const ServiceIconWrapper = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    align-items: center;
    text-align: center;
    border-radius: var(--space-12);
    padding: 1.9rem;
    background-color: var(--green-12);
`;

const ServiceTitle = styled(Typography)`
    padding-top: 11.4rem;
    padding-bottom: 1.8rem;
    font-size: 2.5rem;
`;

const ServiceDescription = styled(Typography)`
    color: var(--jaguar-500);
    margin-right: 3rem;
    margin-bottom: 3rem;
`;

const ServiceCard = ({ item }: ServiceCardProps) => {
    return (
        <ServiceCardBase>
            <ServiceIconWrapper>
                <Icon iconName={item.icon} />
            </ServiceIconWrapper>
            <ServiceTitle variant="displaySM" weight="bold">
                {item.title}
            </ServiceTitle>
            <ServiceDescription variant="subtitleSM" weight="semibold">
                {item.description}
            </ServiceDescription>
        </ServiceCardBase>
    );
};

export { ServiceCard };
