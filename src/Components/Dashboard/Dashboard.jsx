import React from 'react'
import './Dashboard.css'
import DataTable from 'datatables.net-dt'

const Dashboard = () => {
    let table = new DataTable('#table')
  return (
    <main className='ContainerDashboar'>
        <div className='ContentArea'>
            <div className='greeting'>
                <span className='fs-5'>Bienvenido(a), Dario54</span>
            </div>

            <div className='containerCardSummary'>
                <div className='CardSummary'>
                    <div className='cardBody pb-0'>
                        <h2 className='b-2'>1</h2>
                        <p className='card-text'>Citas</p>
                    </div>
                </div>
            </div>

            <div className='ContainerTableSummary'>
                <div className='tableCitasSummary'>
                <table className="table-striped" id="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Identificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>23</td>
                                <td>Dario</td>
                                <td>Gomez</td>
                                <td>10924124124</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>56</td>
                                <td>Kevin</td>
                                <td>Julio</td>
                                <td>474574</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Dashboard