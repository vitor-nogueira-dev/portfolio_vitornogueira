import { IEndpointsProps } from "./IEndpoints";

export interface IProject {
    id: string;
    deskUrl?: string;
    mobUrl: string | undefined;
    title: string;
    description: string;
    stacks: string[];
    repositorio: string;
    deploy?: string;
    endpoints?: IEndpointsProps[];
}