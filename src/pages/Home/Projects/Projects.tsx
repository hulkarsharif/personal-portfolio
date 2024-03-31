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

    @media (max-width: 62.5em) {
        //1000px
        width: 20rem;
        left: 38rem;
    }
    @media (max-width: 56.25em) {
        //900px
        width: 20rem;
        left: 32rem;
    }
    @media (max-width: 50em) {
        //800px
        width: 20rem;
        left: 26rem;
    }

    @media (max-width: 43.75em) {
        //700px
        width: 20rem;
        left: 20rem;
    }
    @media (max-width: 37.5em) {
        //600
        width: 32%;
        left: 13rem;
    }

    @media (max-width: 31.25em) {
        //500
        width: 30%;
        left: 12rem;
    }
    @media (max-width: 25.0625em) {
        //401px

        width: 30%;
        left: 8rem;
    }
    /*
    @media (max-width: 23.4375em) {
        // 375

        width: 15rem;
        left: 8rem;
    } */
    @media (max-width: 24.375em) {
        // 390

        width: 25%;
        left: 5rem;
        bottom: 20%;
    }
    @media (max-width: 26.75em) {
        //428
        width: 34%;
        left: 6rem;
        bottom: 15%;
    }
`;

const Title = styled(Typography)`
    color: var(--jaguar-900);
    text-align: center;
    margin-bottom: var(--space-50);

    position: relative;
    z-index: 4;

    @media (max-width: 31.25em) {
        //500
        font-size: 3.5rem;
    }
`;

const ProjectCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const Projects = () => {
    return (
        <SectionsBase id="projects">
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
