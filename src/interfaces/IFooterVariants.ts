import { Variants } from "framer-motion";

export interface IFooterVariant extends Variants {
    hidden: {
        opacity: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            damping: number;
        };
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            type: string;
            stiffness: number;
            delay: number;
        };
    };
}
