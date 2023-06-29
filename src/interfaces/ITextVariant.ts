import { Variants } from "framer-motion";

export interface ITextVariant extends Variants {
    hidden: {
        opacity: number;
        y: number;
    };
    show: {
        opacity: number;
        y: number;
        transition: {
            type: string;
            ease: string;
        };
    };
}