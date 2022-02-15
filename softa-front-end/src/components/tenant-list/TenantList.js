import React, { useState,useEffect} from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  Progress,
  CardHeader,
  Container,
  Table,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "./tenant.css";
import { BsPencilSquare ,BsFillPersonDashFill} from "react-icons/bs";
import axios from "axios";

const TenantList = ({selectedBlock,selectedFloor,...rest}) => {
  // Modal open state
  const [modal, setModal] = React.useState(false);
  const [tenantList,setTenantList]=useState([]);
  const [blockList,setBlockList]=useState([]);
  const [blockId,setBlockId]=useState(0);
  const [apartList,setApartList]=useState([]);
  const [activeApart,setActiveApart]=useState(true);

  let [newTenant,setNewTenant]=useState({});
  

  useEffect(()=>{
    if(selectedBlock!==0&&selectedFloor===0)
    {
      axios.get("http://localhost:5032/TenantDetailsDbOperations/"+selectedBlock)
      .then((response)=>{
      console.log(response.data);
      const tempList=response.data;
      setTenantList(tempList);});
    }
    else if(selectedBlock!==0 && selectedFloor!==0)
    {
      axios.get("http://localhost:5032/TenantDetailsDbOperations/"+selectedBlock+"/"+selectedFloor)
      .then((response)=>{
      console.log(response.data);
      const tempList=response.data;
      setTenantList(tempList);});
    }
    else
    {
      axios.get("http://localhost:5032/TenantDetailsDbOperations")
      .then((response)=>{
      console.log(response.data);
      const tempList=response.data;
      setTenantList(tempList);});
    }
  
  },[selectedBlock,selectedFloor])
  
const getBlockNames=(()=>{axios.get("http://localhost:5032/BlockDbOperations")
  .then((response)=>{
  console.log(response.data);
  const tempList=response.data;
  setBlockList(tempList);});
})

const addNewTenant = ((event) => {
  let name=event.target.name;
  console.log(name);
  let value=event.target.value;
  console.log(value);
  newTenant[name]=value;
  setNewTenant(newTenant);
})

let save=((event)=>{
  event.preventDefault();
  console.log(newTenant);
  const tenant={
    name:newTenant.name,
    surname:newTenant.lastname,
    email:newTenant.email,
    password:newTenant.password,
    tel_no:newTenant.tel_no,
    license_plate:newTenant.l_plate,
    status:true,
    role_id:2,
    apar_id:parseInt(newTenant.apar_no),
    tc_id:newTenant.tcno
  };
 
  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  axios.post(` http://localhost:5032/TenantDbOperations`,tenant,axiosConfig)
  .then(res=>{
    console.log(res);
    console.log(res.data);
  })
})

const handleChange=((event)=>{
  const block_id=event.target.value;
  console.log(block_id);
  axios.get("http://localhost:5032/ApartmentDbOperations/"+block_id)
  .then((response)=>{
    const tempList=response.data;
    console.log(tempList);
    setApartList(tempList);
    setActiveApart(false);
    newTenant[block_id]=block_id;
    setNewTenant(newTenant);
  })
})
const addTenant=(()=>{
  toggle();
  getBlockNames();
})
 
  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Container>
        <Card className="card-container">
          <CardHeader className="d-flex justify-content-between align-items-center text-start">
            <div>Tenants</div>

            <div className="d-flex w-50 progress-content">
              <div className="w-75">
                <Progress value="25">25%</Progress>
              </div>
              <h6 className="progress-title">
                <span>25</span>/100
              </h6>
            </div>
            <div>
              <Button color="success" size="sm" onClick={addTenant}>
                Add Tenant
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <div></div>
            <Table borderless hover responsive striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fullname</th>
                  <th>TC No</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Licence Plate</th>
                  <th>Block Name</th>
                  <th>Apartment Number</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                tenantList.map((tenant,index)=>
                {
                  return(
                    <tr><td>{index+1}</td>
                        <td>{tenant.name} {tenant.surname}</td>
                        <td>{tenant.tc_id}</td>
                        <td>{tenant.email}</td>
                        <td>{tenant.tel_no}</td>
                        <td>{tenant.license_plate}</td>
                        <td>{tenant.block_name}</td>
                        <td>{tenant.apart_no}</td>
                       <td>
                    <div className="d-flex justify-content-around w-75 m-auto">
                      <Button color="success" size="sm" onClick={toggle}>
                        <BsPencilSquare />
                      </Button>
                      <Button color="danger" size="sm">
                        <BsFillPersonDashFill />
                      </Button>
                    </div>
                  </td>
                  </tr>
                  )
                })
              } 
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>

      <Modal fullscreen="md" size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} >Add Tenant</ModalHeader>
        <ModalBody>
          <Form inline onSubmit={save}>
            <FormGroup floating>
              <Input id="name"
              name="name"
              placeholder="Name" 
              type="text" 
              onChange={addNewTenant} />
              <Label for="name">Name</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="lastname"
                name="lastname"
                placeholder="lastname"
                type="text"
                onChange={addNewTenant}
              />
              <Label for="lastname">Last Name</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input id="tcno"
               name="tcno"
               placeholder="TC No" 
               type="text"
               onChange={addNewTenant} />
              <Label for="tcno">TC No</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={addNewTenant}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={addNewTenant}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="tel_no"
                name="tel_no"
                placeholder="Tel No"
                type="text"
                onChange={addNewTenant}
              />
              <Label for="tel_no">Tel No</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="l_plate"
                name="l_plate"
                placeholder="License Plate"
                type="text"
                onChange={addNewTenant}
              />
              <Label for="l_plate">License Plate</Label>
            </FormGroup>{" "}
            <FormGroup>
              <div className="dropdown bootstrap-select form-control">
                <select className="selectpicker form-control"
                
                onChange={handleChange}>
                 {
                   blockList.map((_block)=>{ 
                    console.log(_block.block_id);
                    return <option value={_block.block_id}>{_block.block_name}</option>
                  })
                 }
                </select>
              </div>
            </FormGroup>{" "}
            <FormGroup>
              <div className="dropdown bootstrap-select form-control">
                <select className="selectpicker form-control" disabled={activeApart}
                name="apar_no" onChange={addNewTenant}>
                 {
                   apartList.map((apart)=>{ 
                    return <option value={apart.apar_id}>Apart no {apart.num_apar}</option>
                  })
                 }
                </select>
              </div>
            </FormGroup>{" "}

            <div className="d-flex justify-content-between w-50 m-auto">
              <Button color="success">Add</Button>
              <Button onClick={toggle}>Cancel</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TenantList;
