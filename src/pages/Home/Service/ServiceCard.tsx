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
    border-radius: var(--space-16);
    padding: var(--space-24);
    box-shadow: var(--shadow-xs);
    /* max-width: 28rem; */
    cursor: pointer;
    flex-direction: column;
    background-color: var(--black-50);

    /* @media (max-width: 24.375em) {
        //390
        display: grid;
        grid-template-rows: repeat(2, 1fr);

        justify-content: space-between;
        align-items: center;
    } */

    /* &:hover {
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
    } */
    transition: all 2s;
    &:hover {
        transform: scale(1.1);
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

    &:hover {
        background-color: var(--dodger-blue-400);

        icon {
            color: var(--primary-600);
        }
    }
`;

const ServiceTitle = styled(Typography)`
    margin-top: 11.4rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
`;

const ServiceDescription = styled(Typography)`
    color: var(--jaguar-600);
    /* background-color: paleturquoise; */
    font-size: 1.2rem;
    line-height: 1.7em;
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
