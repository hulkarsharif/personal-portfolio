import React from "react";
import styled from "styled-components";
import { Tool } from "./types";
import { Icon } from "../../../design-system";
import { PageContainer } from "../../components";
import { tools } from "./data";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;
`;

const ToolBarWrapper = styled.div`
    margin-top: var(--space-60);

    /* padding: 3rem 5rem; */
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: space-around;
    /* background-color: #f6f7fb; */

    @media (max-width: 81.25em) {
        /* padding-left: 7.5rem;
        padding-right: 7.5rem; */
    }

    @media (max-width: 56.25em) {
        /* padding-left: 2.5rem; */
    }

    @media (max-width: 50em) {
        display: flex;
        gap: 1.5rem;
    }

    @media (max-width: 43.75em) {
        display: flex;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 37.5em) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 25em) {
        display: flex;
        align-items: center;
        text-align: center;
    }
`;

const StyledIcon = styled(Icon)`
    margin-right: 1rem;

    @media (max-width: 25em) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const SkillTitle = styled.span`
    font-size: var(--font-size-20);
    font-weight: var(--font-weight-700);
    color: var(--gray-500);
`;

const ToolBox = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 25em) {
        display: flex;
        flex-wrap: wrap;
    }
`;

interface ToolBarProps {
    tools: Tool[];
}

const ToolBar: React.FC<ToolBarProps> = ({ tools }) => {
    return (
        <SectionsBase>
            <ToolBarWrapper>
                {tools.map((tool, idx) => (
                    <ToolBox key={idx}>
                        <StyledIcon
                            height="4rem"
                            width="4rem"
                            iconName={tool.icon}
                        />
                        <SkillTitle>{tool.title}</SkillTitle>
                    </ToolBox>
                ))}
            </ToolBarWrapper>
        </SectionsBase>
    );
};

export const ToolsBar = () => {
    return <ToolBar tools={tools} />;
};
