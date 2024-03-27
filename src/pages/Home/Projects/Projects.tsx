import styled from "styled-components";
import { Typography } from "../../../design-system";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./ProjectCard/data";
import { PageContainer } from "../../components";

const SectionsBase = styled.section`
    padding-left: 9.5rem;
    padding-right: 9.5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media (max-width: 81.25em) {
        //1300

        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    @media (max-width: 56.25em) {
        //900
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;
const ProjectBase = styled(PageContainer)`
    /* padding-top: 10rem; */
    /*padding-bottom: 8rem; */
`;

const YellowLine = styled.span`
    position: absolute;
    right: 70rem;
    bottom: 5%;

    z-index: -1;
    width: 15rem;
    height: 1.5rem;
    background-color: #ffbe62;
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: center;
    margin-bottom: var(--space-50);

    position: relative;
    z-index: 4;
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
                    <YellowLine></YellowLine>
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
