export interface ITextContainer {
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