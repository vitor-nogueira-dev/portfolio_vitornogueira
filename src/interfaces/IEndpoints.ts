export interface IEndpointsProps {
    method: string,
    path: string,
    description: string,
    authentication?: string,
}

export interface IEndpointsComponentProps {
    endpoints?: IEndpointsProps[];
}