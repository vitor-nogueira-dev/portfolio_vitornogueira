import { IEndpointsProps } from "./IEndpoints";

export interface IProjectBackend  {
    id: string;
    mobUrl: undefined;
    title: string;
    stacks: string[];
    repositorio: string;
    endpoints: IEndpointsProps[];
}
