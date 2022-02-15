import React from 'react'
import { Card, CardBody, CardHeader, Container,Table,Badge} from 'reactstrap';
import './activities.css'

const RecentActivities = () => {
    const isActive=true;
  return (
    <div>
        <Container>
            <Card className='card-container'>
                <CardHeader className='text-start'>
                    Recent Activities
                </CardHeader>
                <CardBody>
                    <div>
                      
                    </div>
                <Table
                    borderless
                    hover
                    responsive
                    striped
                    >
                    <thead>
                        <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Fullname
                        </th>
                        <th>
                           Dues
                        </th>
                        <th>
                            Water Bill
                        </th>
                        <th>
                            Electricity Bill
                        </th>
                        <th>
                            Gas Bill
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">
                           
                        </th>
                        <td>
                          
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                100/2000
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="success"
                                pill
                            >
                                100/100
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="success"
                                pill
                            >
                                200/200
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                20/200
                            </Badge>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                X
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="success"
                                pill
                            >
                                ✓
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="success"
                                pill
                            >
                                ✓
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                X
                            </Badge>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                        <Badge
                                color="success"
                                pill
                            >
                               ✓
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color={ isActive? "success": "danger"}
                                pill
                            >
                                {isActive? '✓' : 'X'}
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                X
                            </Badge>
                        </td>
                        <td>
                        <Badge
                                color="danger"
                                pill
                            >
                                X
                            </Badge>
                        </td>
                        </tr>
                      
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}

export default RecentActivities;
