export interface IFooterVariant {
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
