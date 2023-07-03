export interface IProjectBackend {
    id: string;
    mobUrl: undefined;
    title: string;
    stacks: string[];
    repositorio: string;
    endpoints: {
        method: string,
        path: string,
        description: string,
        authentication?: string,
    }[]
}