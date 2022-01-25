import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Inventory = () => {
    return(
        <div id="inventory" className='inventory-div cover-container d-flex flex-column justify-content-center align-items-center align-content-center'>
            <h1>Inventory</h1>
            <Container className='p-4 table-wrapper-scroll-y my-custom-scrollbar"'>
                <Table hover striped variant='light'>
                    <thead>
                        <tr>
                            <th scope='col'>Plant Name</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        <tr>
                            <th scope="row">Plant name</th>
                            <td>Bush</td>
                            <td>1gallon</td>
                        </tr>
                        
                        
                    </tbody>
                </Table>

            </Container>
        </div>
    )
}

export default Inventory;