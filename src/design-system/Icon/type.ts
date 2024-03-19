export type IconName =
    | "red-icon"
    | "green-icon"
    | "blue-icon"
    | "small-gr-icon"
    | "small-sc-icon"
    | "small-pr-icon"
    | "primary-icon"
    | "three-dots"
    | "instagram"
    | "github-icon"
    | "linkedin-svgrepo-com"
    | "line-decoration"
    | "doc-icon"
    | "search-icon"
    | "up-arrow"
    | "play-icon"
    | "css"
    | "html"
    | "figma"
    | "prisma"
    | "mongodb"
    | "javascript"
    | "nodejs"
    | "npm"
    | "react"
    | "typescript"
    | "vscode"
    | "expressjs"
    | "git"
    | "github"
    | "terminal"
    | "sass"
    | "corel-draw"
    | "frontend"
    | "backend"
    | "internet"
    | "management"
    | "database"
    | "mail"
    | "phone";

export type IconProps = {
    iconName?: IconName;
    className?: string;
    height?: string;
    width?: string;
    onClick?: () => void;
};
