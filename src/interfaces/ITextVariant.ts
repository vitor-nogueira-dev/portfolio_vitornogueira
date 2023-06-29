export interface ITextVariant {
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