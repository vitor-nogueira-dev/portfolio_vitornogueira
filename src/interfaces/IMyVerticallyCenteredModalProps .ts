import { IEndpointsProps } from "./IEndpoints";

export interface IMyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
    title?: string;
    mobUrl: string;
    endpoints?: IEndpointsProps[];
    description: string;
}