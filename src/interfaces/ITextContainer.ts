import { Variants } from "framer-motion";

export interface ITextContainer extends Variants {
    hidden: {
        opacity: number;
    };
    show: (i?: number) => {
        opacity: number;
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
}