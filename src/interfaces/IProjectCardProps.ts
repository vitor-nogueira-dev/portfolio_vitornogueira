import { IEndpointsProps } from "./IEndpoints";

export interface IProjectCardProps {
    title: string;
    stacks?: string[];
    mobUrl: string;
    endpoints?: IEndpointsProps[];
    description: string;
}