import styled, { css } from "styled-components";
import { documents } from "./data";
import { Typography, Icon } from "../../../design-system";

type IconName = "doc-icon" | "search-icon" | "up-arrow" | "play-icon";

export type Service = {
    icon: IconName;
    title: string;
    description: string;
};

type ServiceCardProps = {
    item: Service;
};

export const ServiceCardBase = styled.div<{ icon: string }>`
    border-radius: var(--border-radius-16);

    padding: var(--space-30);
    box-shadow: var(--shadow-xs);

    width: 28rem;
    cursor: pointer;
    flex-direction: column;
    background-color: var(--black-50);

    &:hover {
        background-color: var(--dodger-blue-900);
        p {
            color: white;
        }
        icon {
            background-color: #ffffff;
            color: var(--primary-200);
        }
        h5 {
            color: white;
        }
    }
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 81.25em) {
        display: flex;
    }
`;
const ServiceIconWrapper = styled.div`
    max-width: 6.2rem;
    height: 6.2rem;
    align-items: center;
    text-align: center;
    border-radius: var(--space-12);
    padding: 1.9rem;
    background-color: var(--dodger-blue-900);
`;

const ServiceTitle = styled(Typography)`
    margin-top: 11.4rem;
    margin-bottom: 1.8rem;
    font-size: 2.5rem;
`;

const ServiceDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const ServiceCard = ({ item }: ServiceCardProps) => {
    return (
        <ServiceCardBase icon={item.icon}>
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
