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
    border-radius: var(--border-radius-24);
    padding: var(--space-8);
    box-shadow: var(--shadow-xs);
    /* margin-left: 76px;
    margin-bottom: 70px; */

    max-width: 37rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        width: 10.8rem;
        height: 10.8rem;
        justify-content: space-between;

        margin-top: var(--space-40);
        margin-bottom: var(--space-40);
    }
`;
const ServiceIconWrapper = styled.div`
    max-width: 35rem;
    padding: var(--space-24);
`;

const ServiceTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const ServiceDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const ServiceCard = ({ item }: ServiceCardProps) => {
    return (
        <ServiceCardBase>
            <ServiceIconWrapper>
                <Icon iconName={item.icon} />
            </ServiceIconWrapper>
            <ServiceTitle variant="paragraphLG" weight="semibold">
                {item.title}
            </ServiceTitle>
            <ServiceDescription variant="subtitleLG" weight="medium">
                {item.description}
            </ServiceDescription>
        </ServiceCardBase>
    );
};

export { ServiceCard };
