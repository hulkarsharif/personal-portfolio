import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectCard/data";
import { PageContainer } from "../../components";

const ProjectBase = styled(PageContainer)`
    /* background-color: springgreen; */
    padding-left: 10.6rem;
    padding-right: 8.5rem;
    padding-top: 10rem;
    /*padding-bottom: 8rem; */
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: center;
    margin-bottom: var(--space-70);
`;

const ProjectCardsWrapper = styled.div`
    /* row-gap: var(--space-20); */
`;

const Projects = () => {
    return (
        <ProjectBase>
            <Title variant="h3" weight="semibold">
                Featured <span>Projects</span>
            </Title>

            <ProjectCardsWrapper>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </ProjectCardsWrapper>
        </ProjectBase>
    );
};

export { Projects };
