import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectCard/data";
import { PageContainer } from "../../components";

const SectionsBase = styled.section`
    padding-left: 9.55rem;
    padding-right: 9.55rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
`;
const ProjectBase = styled(PageContainer)`
    /* padding-top: 10rem; */
    /*padding-bottom: 8rem; */
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: center;
    margin-bottom: var(--space-70);
`;

const ProjectCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const Projects = () => {
    return (
        <SectionsBase>
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
        </SectionsBase>
    );
};

export { Projects };
