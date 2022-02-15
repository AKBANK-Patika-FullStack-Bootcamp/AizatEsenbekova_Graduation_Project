import React from 'react';
import {Container,Card,CardHeader,CardBody,Button,Table} from 'reactstrap';

const HaventPayYet = ()=> {
  return (
    <div>
        <Container>
        <Card className="card-container">
          <CardHeader className="d-flex justify-content-between align-items-center text-start">
            <div>Haven't Payed Yet</div>

           
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
                  <th>Phone Number</th>
                  <th>Apartment Number</th>

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
                  <td>sdsd</td>
                  <td>sdsd</td>
                  <td>
                   
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
export default HaventPayYet;