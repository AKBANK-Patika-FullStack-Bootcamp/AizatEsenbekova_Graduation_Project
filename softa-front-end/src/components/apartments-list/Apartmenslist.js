import React ,{ useEffect, useState} from 'react';
import { Modal,ModalHeader,ModalBody,Card, CardBody, Progress,CardHeader, Container,Table,Button,Form,FormGroup} from 'reactstrap';
import axios from 'axios';


const Apartmenslist = ({selectedBlock,selectedFloor,...rest}) => {

        // Modal open state
        const [modal, setModal] = React.useState(false);
        const [apartList,setApartList]=useState([]);
        const [typeList,setTypeList]=useState([]);
        const [blockList,setBlockList]=useState([]);
        const [activeFloor, setActiveFloor]= useState(0);
        const [activeApart, setActiveApart]= useState(0);
      
        let [newApartment,setNewApartment]=useState({
            num_floor:0,
            num_apar:0,
            status:false,
            block_id:0,
            type_id:0
        });

        const runCallback = (cb) => {
            return cb();
          };
    
        // Toggle for Modal
        const toggle = () => setModal(!modal);
        useEffect(()=>{
        if(selectedBlock===0)
        {
        axios.get("http://localhost:5032/ApartmentDetailsDbOperations")
        .then((response)=>{
        console.log(response.data);
        setApartList(response.data);
        });
        }
        else
        {
            axios.get("http://localhost:5032/ApartmentDetailsWithCondition/"+selectedBlock+"/"+selectedFloor)
            .then((response)=>{
            console.log(response.data);
            setApartList(response.data);
            }); 
        }
        axios.get("http://localhost:5032/BlockDbOperations")
        .then((response)=>{
            console.log(response.data);
            setBlockList(response.data)
        });

        axios.get("http://localhost:5032/Type_RoomsDbOperations")
        .then((response)=>{
            console.log(response.data);
            setTypeList(response.data)
        });

      },[selectedBlock,selectedFloor])//run when selectedBlock and selected floor change

        
        const handleChange =( event) => {
            const name=event.target.name;
            const value=event.target.value;
            console.log(value);
            newApartment[name]=value;
            setNewApartment(newApartment);
        };
      
        //get selected block
        const blockChecked=(event)=>{
            const value=event.target.value;
            console.log(event.target.value);
            const selected=blockList.filter(ch=>ch.block_name===value);
            setActiveFloor(selected[0].num_floors);
            setActiveApart(selected[0].num_flats);
            handleChange(event);
          };
      
          //save new aparts values
        let save=event=>{
          event.preventDefault();
          console.log(newApartment);
          const _block={
              num_floor:parseInt(newApartment.num_floor),
              num_apar:parseInt(newApartment.num_apar),
              status:newApartment.status,
              block_id:blockList.filter((ch)=>ch.block_name=== newApartment.block_id)[0].block_id,
              type_id:typeList.filter((ch)=>ch.type_name===newApartment.type_id)[0].type_id
          };
          console.log(_block);
        
         const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          axios.post(`http://localhost:5032/ApartmentDbOperations`,_block,axiosConfig)
          .then(res=>{
            console.log(res);
            console.log(res.data);
          })
        }
     
  return (
    <div>
         <Container>
            <Card className='card-container'>
                <CardHeader className='d-flex justify-content-between align-items-center text-start'>
                    <div>Apartmens</div>
                    
                    <div className='d-flex w-50 progress-content'>
                            
                            <div className='w-75'>
                                <Progress value="25">
                                25%
                                </Progress>
                               
                            </div>
                            <h6 className='progress-title'><span>25</span>/100</h6>
                       
                    </div> 
                    <div>
                            <Button
                                color="success"
                                size="sm"
                                onClick={toggle}
                            >
                                Add Apartment
                            </Button>
                            
                     </div>

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
                            Block
                        </th>
                        <th>
                            Floor number
                        </th>
                        <th>
                            Apartment Number
                        </th>
                        <th>
                            Type Rooms
                        </th>
                        <th>
                            Resident's full name
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    {apartList.map((apart,index)=>
                    {
                        return(
                            <tr>
                            <th scope="row">
                            {index+1}
                            </th>
                            <td>{apart.block_name}</td>
                            <td>{apart.floor_num}</td>
                            <td>{apart.apart_num}</td>
                            <td>{apart.type_name}</td>
                            <td>{apart.r_name} {apart.r_surname}</td>
                            </tr>
                        )
                    })}
                      
                 
                        
                        
                        
               
                      
                    </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Container>
        
       

        <Modal
    fullscreen="md"
    size="lg"
    isOpen={modal}
    toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Add Apartment
    </ModalHeader>
    <ModalBody>
    <Form inline onSubmit={save}>

      <FormGroup >
        <div className="dropdown bootstrap-select form-control">
                <select
                    name='block_id'
                    className="selectpicker form-control"
                    onChange={blockChecked}
                >
                    {
                        blockList.map((block)=>{
                            return <option>{block.block_name}</option>
                        })
                    }
                </select>
            </div>
      </FormGroup>
      {' '}
      <FormGroup >
        <div className="dropdown bootstrap-select form-control">
                <select
                    name='num_floor'
                    className="selectpicker form-control"
                    onChange={handleChange}
                >   
                {
                    runCallback(() => {
                    const option = [];
                    for(let i=1; i<=activeFloor; i++)
                    {
                     option.push(<option value={i}>Floor {i}</option>);
                    }
                    return option;
                    })
                 }
                </select>
            </div>
      </FormGroup>
      {' '}
      <FormGroup >
        <div className="dropdown bootstrap-select form-control">
                <select
                    name='num_apar'
                    className="selectpicker form-control"
                    onChange={handleChange}
                >
                {
                        
                        runCallback(() => {
                            const option1 = [];
                        for(let i=1; i<=activeApart; i++)
                        {
                          
                            option1.push(<option value={i}>Apart {i}</option>);
                        }
                        return option1;
                        })
                }
        
                </select>
            </div>
      </FormGroup>
      {' '}
 
      <FormGroup >
        <div className="dropdown bootstrap-select form-control">
                <select
                   name='type_id'
                    className="selectpicker form-control"
                    onChange={handleChange}>
                     {
                        typeList.map((type)=>{
                            return <option>{type.type_name}</option>
                        }
                        )
                    }
                </select>
            </div>
      </FormGroup>
      {' '}
      <div className='d-flex justify-content-between w-50 m-auto'>
      <Button color="success">
        Add
      </Button>
      <Button onClick={toggle}>
        Cancel
      </Button>
      </div>
      
    </Form>
    </ModalBody>

  </Modal>
    </div>
  )
}

export default Apartmenslist;
