import { HTMLMotionProps } from "framer-motion";

export interface ProjectCardProps extends HTMLMotionProps<'div'> {
    id: string;
    mobUrl: string;
    deskUrl: string;
    title: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
    isLgScreen: boolean;
    stacks?: string[];
    repositorio: string;
    deploy: string;
}