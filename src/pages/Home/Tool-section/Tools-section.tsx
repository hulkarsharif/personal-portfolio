import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components";
import { skills } from "./data";

const ToolWrapper = styled(PageContainer)`
    padding-top: 10rem;
    padding-bottom: 5rem;
    padding-left: 13rem;
    padding-right: 13rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SkillCard = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const SkillImage = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`;

const SkillTitle = styled.span`
    font-size: var(--space-16);
`;

const Tools = () => {
    return (
        <ToolWrapper>
            {skills.map((skill, index) => (
                <SkillCard key={index}>
                    <SkillImage src={skill.image} />
                    <SkillTitle>{skill.title}</SkillTitle>
                </SkillCard>
            ))}
        </ToolWrapper>
    );
};

export { Tools };
