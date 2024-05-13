import React from 'react'
import './Dashboard.css'
import DataTable from 'datatables.net-dt'

const Dashboard = () => {
    let table = new DataTable('#table')
  return (
    
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
                                <th scope="col">MOTIVO</th>
                                <th scope="col">FECHA</th>
                                <th scope="col">HORA</th>
                                <th scope="col">MEDICO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Odontología</td>
                                <td>2023/11/23</td>
                                <td>11:16:34</td>
                                <td>Luiz Mendoza</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Dolor crónico o agudo</td>
                                <td>2024/05/24</td>
                                <td>13:30:01</td>
                                <td>Jose Miguel</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Psicología</td>
                                <td>2024/04/10</td>
                                <td>18:12:54</td>
                                <td>Juan Gomez</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Consulta general</td>
                                <td>2024/07/18</td>
                                <td>16:16:11</td>
                                <td>Enrique Garcia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default Dashboard