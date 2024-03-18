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
    box-shadow: var(--shadow-m);
    margin-bottom: var(--space-40);

    background-color: ${({ name }) => {
        switch (name) {
            case "Projectify-App":
                return "#1F1D2B";
            case "Furniture Website":
                return "#5F9FFE";
            case "Restaurant Website":
                return "#56B0B9";
            default:
                return "transparent";
        }
    }};
    @media (max-width: 84em) {
        //1344
        width: 119rem;
    }

    @media (max-width: 84em) {
        //1300
        width: 100%;
    }

    @media (max-width: 75em) {
        //1200
        width: 100%;
    }

    @media (max-width: 37.5em) {
        //600
        align-items: center;
        display: block;
        /* width: 56rem; */
        height: 50rem;
        /* margin-bottom: 5rem; */
    }
`;

const ProjectTextWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 37.5em) {
        //600
        display: block;
        align-items: start;
        width: 100%;
    }
    @media (max-width: 37.5em) {
        //600
        display: block;
        align-items: start;
        width: 100%;
    }

    @media (max-width: 25em) {
        //400
        display: block;
        align-items: start;
        width: 100%;
    }
`;

const ProjectName = styled(Typography)`
    /* padding: 4rem; */
    /* align-items: center;
    text-align: center; */
    margin-top: 9rem;
    line-height: 2.3rem;
    font-size: 3rem;
    margin-bottom: var(--space-16);
    /* margin-top: var(--space-20); */
    color: white;

    @media (max-width: 62.5em) {
        //1000
        display: flex;
        line-height: 2.4rem;
        font-size: 2rem;
    }

    @media (max-width: 37.5em) {
        //600
        margin-top: 2rem;
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 2rem;
        font-size: 2.3rem;
    }

    @media (max-width: 37.5em) {
        //400
        margin-top: 2rem;
        display: flex;
        align-items: center;
        text-align: center;
        line-height: 1rem;
        font-size: 2.3rem;
    }
`;

const ProjectDescription = styled(Typography)`
    align-items: center;
    text-align: center;

    margin-bottom: var(--space-30);
    color: white;

    @media (max-width: 62.5em) {
        //1000
        display: flex;
        line-height: 2.4rem;
        font-size: 2rem;
    }
    @media (max-width: 37.5em) {
        //600
        display: flex;
        text-align: start;
        padding-top: 5rem;

        line-height: 0.5rem;
        font-size: 2rem;
    }

    @media (max-width: 37.5em) {
        //400
        display: flex;
        text-align: start;
        padding-top: 5rem;

        line-height: 1rem;
        font-size: 1.3rem;
    }
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

    @media (max-width: 37.5em) {
        //600
        display: block;
        width: 45rem;

        height: 20rem;
        padding-bottom: 1.5rem;
        overflow: hidden;
    }

    @media (max-width: 37.5em) {
        //400
        display: block;
        width: 100%;

        height: 22rem;
        padding-bottom: 1.5rem;
        overflow: hidden;
    }
`;
const ProjectArrow = styled.div`
    padding-top: 6rem;

    /*padding-bottom: 9rem; */
    cursor: pointer;

    @media (max-width: 62.5em) {
        //1000
        display: none;
    }
    @media (max-width: 37.5em) {
        //600
        padding-top: 2rem;
        display: flex;
        align-items: center;
    }
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        // <ProjectCardBase>
        <ProjectCardWrapper name={project.name}>
            <ProjectTextWrapper>
                <ProjectName variant="h5" weight="bold">
                    {project.name}
                </ProjectName>
                <ProjectDescription variant="h6" weight="medium">
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
