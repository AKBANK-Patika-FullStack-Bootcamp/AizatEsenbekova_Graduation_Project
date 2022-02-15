import React from 'react';
import {Container,Card,CardHeader,CardBody,Button,Table} from 'reactstrap';
import { BsPencilSquare} from "react-icons/bs";

const HavePaid = ()=> {
  return (
    <div>
        <Container>
        <Card className="card-container">
          <CardHeader className="d-flex justify-content-between align-items-center text-start">
            <div>Have Paid</div>

           
            <div className="dropdown bootstrap-select">
                <select className="selectpicker form-control">
                  <option>Mustard</option>
                  <option>Ketchup</option>
                  <option>Relish</option>
                </select>
            </div>
            
          </CardHeader>
          <CardBody>
            <div></div>
            <Table borderless hover responsive striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fullname</th>
                  <th>Type Of Bill</th>
                  <th>Amount</th>
                  <th>Date</th>
              

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>sdd</td>
                  <td>sdds</td>
                  <td>sd</td>
               
                  <td>
                    <div className="d-flex justify-content-around w-75 m-auto">
                      <Button color="success" size="sm">
                        <BsPencilSquare />
                      </Button>
                    </div>
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
export default HavePaid;