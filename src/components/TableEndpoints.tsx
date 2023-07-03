
import React from "react";
import { Table } from "react-bootstrap";

import '@/styles/table.style.css'
import { IEndpointsComponentProps, IEndpointsProps } from "@/interfaces/IEndpoints";

const TableEndpoints: React.FC<IEndpointsComponentProps> = ({ endpoints }) => {
    return (
        <div className="table-responsive">
            <Table responsive striped bordered hover className="table-dark table-custom border-secondary mt-4">
                <thead>
                    <tr>
                        <th>Método</th>
                        <th>Path</th>
                        <th>Descrição</th>
                        {endpoints?.find((endpoint: IEndpointsProps) => endpoint.authentication) && (
                            <th>Autenticação</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {endpoints?.map((endpoint: IEndpointsProps, index: number) => (
                        <tr key={index}>
                            <td>{endpoint.method}</td>
                            <td>{endpoint.path}</td>
                            <td>{endpoint.description}</td>
                            {endpoint.authentication && (
                                <td>{endpoint.authentication}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableEndpoints;