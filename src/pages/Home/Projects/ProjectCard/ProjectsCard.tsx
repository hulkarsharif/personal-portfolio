import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import whiteArrow from "../../../../design-system/assets/image/whiteArrow.png";

type Project = {
    image: string;
    name: string;
    description: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCardWrapper = styled.div<{ name: string }>`
    padding: var(--space-40);
    width: 124.4rem;
    height: 41rem;

    display: flex;
    align-items: right;
    gap: var(--space-20);

    border-radius: var(--border-radius-8);
    box-shadow: var(--shadow-l);
    margin-bottom: var(--space-40);

    background-color: ${({ name }) => {
        switch (name) {
            case "Projectify-App":
                return "#1F1D2B";
            case "Furniture Website":
                return "#5F9FFE";
            case "Restaurant Website":
                return "#3e7741";
            default:
                return "transparent";
        }
    }};
`;

const ProjectTextWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const ProjectName = styled(Typography)`
    padding: 4rem;
    margin-bottom: var(--space-16);
    color: white;
`;

const ProjectDescription = styled(Typography)`
    margin-bottom: var(--space-30);
    color: white;
`;

const ProjectImageWrapper = styled.div`
    width: 60%;
    overflow: hidden;
    border-radius: var(--border-radius-8);

    img {
        height: 54rem;
        /* width: 100%; */
        object-fit: cover;

        transition: all 1s;

        &:hover {
            transform: scale(1.04);
        }
    }
`;
const ProjectArrow = styled.div`
    padding-top: 6rem;
    padding-bottom: 9rem;
    cursor: pointer;
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        // <ProjectCardBase>
        <ProjectCardWrapper name={project.name}>
            <ProjectTextWrapper>
                <ProjectName variant="h5" weight="semibold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="h5" weight="semibold">
                    {project.description}
                </ProjectDescription>
                <Button
                    size="lg"
                    variant="text"
                    color="secondary"
                    shape="rounded"
                >
                    GitHub
                </Button>
                <ProjectArrow>
                    <img src={whiteArrow} alt="arrow" />
                </ProjectArrow>
            </ProjectTextWrapper>

            <ProjectImageWrapper>
                <img src={project.image} alt="Project" />
            </ProjectImageWrapper>
        </ProjectCardWrapper>
        // </ProjectCardBase>
    );
};

export { ProjectCard };
