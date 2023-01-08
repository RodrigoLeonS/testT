import React from 'react';
import Sidebar from '../components/section/Sidebar';
import styled from 'styled-components';
import * as ProductServer from '../config/ProductsServer';


const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TableCell = styled.td`
    border: 1px solid #ccc;
    padding: 10px;
`;

const TableHeadCell = styled.th`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
`;

class DashBoardPage extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        // Cargar los datos desde una API o base de datos
        fetch('http://127.0.0.1:8000/api/listdate/')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    handleModifyClick = async(dateId) => {
        // Lógica para modificar el elemento "item"
        await ProductServer.modifydate(dateId);
        this.setState(this.componentDidMount)

    }

    handleDeleteClick = async(dateId) => {
        // Lógica para eliminar el elemento "item"
        await ProductServer.deletedate(dateId);
        this.setState(this.componentDidMount)
    }

    
    render() {
        return (

            <div className="section">
                <div classname="elements">
                    <Sidebar />
                </div>
                <div className="section">
                    <div className="container">
                        <div className="container elements">
                            <Table>
                                <thead>
                                    <tr>
                                        <TableHeadCell>ID Reserva</TableHeadCell>
                                        <TableHeadCell>Nombre de la Reserva</TableHeadCell>
                                        <TableHeadCell>Fecha de Reserva</TableHeadCell>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(item => (
                                        <tr key={item.id}>
                                            <TableCell>{item.id}</TableCell>
                                            <TableCell>{item.descripcion}</TableCell>
                                            <TableCell>
                                                <button onClick={() => this.handleModifyClick(item)}>Modificar</button>
                                                <button onClick={() => item.id && this.handleDeleteClick(item.id)}>Eliminar</button>

                                            </TableCell>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoardPage;