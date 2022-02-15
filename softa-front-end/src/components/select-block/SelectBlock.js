import React, { useEffect, useState } from 'react'
import {Modal,ModalHeader,ModalBody, Row,Col,Button } from 'reactstrap';
import './select.css';
import {BsPlusCircle} from "react-icons/bs";
import AddBlock from '../../components/add-block/AddBlock'
import axios from 'axios';


const SelectBlock =({blockChanger,floorChanger, ...rest})=> {
    const [addBalckModal, setBlock] = React.useState(false);
    const blockToggle = ()=>setBlock(!addBalckModal);
    const [blockList,setBlockList]=useState([]);
    const [floorActive,setFloorActive]=useState(true);
    const [floorNumber,setFloorNumber]=useState(0);
    const runCallback = (cb) => {
      return cb();
    };

    useEffect(()=>{axios.get("http://localhost:5032/BlockDbOperations")
    .then((response)=>{
    console.log(response.data);
    const tempList=response.data;
    setBlockList(tempList);});
  },[])
    
  const blockChecked=(event)=>{
    const value=event.target.value;
    setFloorActive(false);
    const selected=blockList.filter(ch=>ch.block_name===value);
    blockChanger(selected[0].block_id);
    setFloorNumber(selected[0].num_floors);
   
  };
  const floorChecked=(event)=>{
    const value=parseInt(event.target.value);
    floorChanger(value);
  };
  return (
    <div> 
   <Row>
    <Col className="col-sm-5">
      <div className="form-group ">
        <div className="dropdown bootstrap-select form-control d-flex">
          <select  onChange={blockChecked} 
            className="selectpicker form-control">
           
            {
              
              blockList.map((_block,index)=>{ 
              return <option key={index}>{_block.block_name}</option>
            })
          }      
          </select>
          <Button
                color="success"
                size="xs"
                onClick={blockToggle}
            >
                <BsPlusCircle/>
            </Button>
        </div>
       
      </div>
    </Col>
    <Col className="col-sm-7">
      <div className="form-group">
        <div className="dropdown bootstrap-select form-control">
          <select disabled={floorActive}
            className="selectpicker form-control"
            onChange={floorChecked} >
                {
                    runCallback(() => {
                    const option = [];
                    for(let i=1; i<=floorNumber; i++)
                    {
                     option.push(<option value={i}>Floor {i}</option>);
                    }
                    return option;
                    })
                 }
          </select>
        </div>
      </div>
    </Col>
  </Row>
  
  <Modal
    fullscreen="md"
    size="lg"
    isOpen={addBalckModal}
    toggle={blockToggle}
  >
    <ModalHeader toggle={blockToggle}>
      Add Block
    </ModalHeader>
    <ModalBody>
        <AddBlock stateChanger={setBlock}/>
    </ModalBody>

  </Modal>
  </div>
  )
}
export default SelectBlock;