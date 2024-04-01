import styled from "styled-components";
import { Button, Typography } from "../../../../design-system";
import whiteArrow from "../../../../design-system/assets/image/Arrow 7.png";

type Project = {
    image: string;
    name: string;
    githubLink?: string;
    demoLink: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCardWrapper = styled.div<{ name: string }>`
    padding: var(--space-50);

    height: 44rem;
    display: flex;
    gap: var(--space-20);
    border-radius: 2.4rem;
    box-shadow: var(--shadow-m);
    /* margin-bottom: var(--space-40); */

    background-color: ${({ name }) => {
        switch (name) {
            case "Projectify-App":
                return "#1F1D2B";
            case "Interior Decor":
                return "#5F9FFE";
            case "Cucina Italiana":
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

    @media (max-width: 44em) {
        //704
    }
    @media (max-width: 37.5em) {
        //600
        align-items: center;
        text-align: center;
        display: block;
        /* width: 56rem; */
        /* height: 50rem; */
        /* padding-bottom: 5rem; */
    }
`;

const ProjectTextWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;

    @media (max-width: 37.5em) {
        //600

        align-items: center;
        text-align: center;

        width: 100%;
    }

    @media (max-width: 26.75em) {
        //428

        /* width: 100%;
        align-items: center;
        text-align: center; */
    }
`;

const ProjectName = styled(Typography)`
    margin-top: 9rem;

    font-size: 4rem;
    margin-bottom: var(--space-20);

    /* margin-top: var(--space-20); */
    color: white;

    @media (max-width: 62.5em) {
        //1000
        display: flex;
    }

    @media (max-width: 37.5em) {
        //600
        margin-top: 2rem;
        display: flex;
        text-align: center;
        align-items: center;
    }

    @media (max-width: 26.75em) {
        //400
        margin-top: 1rem;
    }
`;

const Buttons = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 1rem;

    @media (max-width: 37.5em) {
        //600
        margin-bottom: 2rem;
        display: flex;
        text-align: center;
        align-items: center;

        /* line-height: 2rem;
        font-size: 2.3rem; */
    }

    /* @media (max-width: 25em) {
        //400
        display: inline-flex;
        align-items: left;
        text-align: left;
    } */
`;
const ProjectImageWrapper = styled.div`
    width: 70%;
    overflow: hidden;
    border-radius: 2.4rem;

    img {
        height: 50rem;
        width: 100%;
        object-fit: cover;

        transition: all 1s;

        &:hover {
            transform: scale(1.04);
        }
    }

    @media (max-width: 37.5em) {
        //600

        width: 100%;
        /* height: auto; */

        img {
            border-radius: 2.4rem;
            /* height: auto; */
            width: 100%;
            max-height: 19rem;
        }
    }

    @media (max-width: 26.75em) {
        width: 100%;
        height: auto;
        border-radius: 1rem;

        img {
            border-radius: 0;
        }
    }

    @media (max-width: 25em) {
        width: 100%;
        height: 18rem;
        border-radius: 0;

        img {
            height: 100%;
            border-radius: 0;
        }
    }
`;
// const ProjectArrow = styled.div`
//     padding-top: 6rem;
//     display: flex;
//     color: white;

//     cursor: pointer;

//     @media (max-width: 62.5em) {
//         //1000
//         /* display: none; */
//     }

//     @media (max-width: 37.5em) {
//         //600
//         padding: 3rem;
//         display: flex;
//         align-items: left;
//     }

//     @media (max-width: 26.75em) {
//         //428
//         padding: 2rem;
//         display: flex;
//         align-items: left;
//     }
// `;

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <ProjectCardWrapper name={project.name}>
            <ProjectTextWrapper>
                <ProjectName variant="h5" weight="bold">
                    {project.name}
                </ProjectName>

                <Buttons>
                    <a href={project.githubLink}>
                        <Button
                            size="lg"
                            variant="outlined"
                            color="secondary"
                            shape="rounded"
                        >
                            GitHub
                        </Button>
                    </a>

                    <a href={project.demoLink}>
                        <Button
                            size="lg"
                            variant="outlined"
                            color="secondary"
                            shape="rounded"
                        >
                            Demo
                        </Button>
                    </a>
                </Buttons>

                {/* <ProjectArrow>
                    <Typography variant="paragraphSM">
                        See Detail Project
                    </Typography>
                    <img src={whiteArrow} alt="arrow" />
                </ProjectArrow> */}
            </ProjectTextWrapper>

            <ProjectImageWrapper>
                <img src={project.image} alt="Project" />
            </ProjectImageWrapper>
        </ProjectCardWrapper>
    );
};

export { ProjectCard };
