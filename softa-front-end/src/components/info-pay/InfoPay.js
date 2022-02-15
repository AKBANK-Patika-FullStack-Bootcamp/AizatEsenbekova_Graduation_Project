import React from "react";
import { Card, CardBody,Button,Table,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import {BsCashCoin} from "react-icons/bs";
import BankCard from "../bank-card/BankCard";

const InfoPay = () => {
     // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Card>
        <CardBody>
          <Table borderless hover responsive striped>
            <thead>
              <tr>
                <th>Pay for</th>
                <th>Dues</th>
                <th>Water Bill</th>
                <th>Electricity Bill</th>
                <th>Gas Bill</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Amount</th>
                <td>200</td>
                <td>300</td>
                <td>350</td>
                <td>400</td>
                <td>
                  <div className="d-flex justify-content-around w-75 m-auto">
                    <Button color="success" size="sm" onClick={toggle}>
                      <BsCashCoin/>
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>


      <Modal
    fullscreen=""
    size="lg"
    isOpen={modal} toggle={toggle}
  >

    <ModalBody>
     <BankCard/>
    </ModalBody>

  </Modal>
    </div>
  );
};

export default InfoPay;
