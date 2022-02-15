import React, { useState } from 'react';
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import axios from 'axios';

const AddBlock = ({stateChanger, ...rest})=> {
  
let [newBlock,setNewBlock]=useState({
  name:'',
  num_floors:0,
  num_aparts:0
});

const handleChange = event => {
  let name=event.target.name;
  let value=event.target.value;
  newBlock[name]=value;
  setNewBlock(newBlock);
}

let save=event=>{
  event.preventDefault();
  console.log(newBlock);
  const _block={
    block_name:newBlock.name,
    num_flats:newBlock.num_aparts,
    num_floors:newBlock.num_floors
  };

  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  axios.post(`http://localhost:5032/BlockDbOperations`,_block,axiosConfig)
  .then(res=>{
    console.log(res);
    console.log(res.data);
  })
}
  return (
    <div>
          <Form inline onSubmit={save}>
    <FormGroup floating>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <Label for="name">
          Block Name
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="num_floors"
          name="num_floors"
          placeholder="Number of floors"
          type="number"
          onChange={handleChange}
        />
        <Label for="num_floors">
            Number of floors
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="num_aparts"
          name="num_aparts"
          placeholder="Floor"
          type="number"
          onChange={handleChange}
        />
        <Label for="Number of apartments">
         Number of apartments
        </Label>
      </FormGroup>

      <div className='d-flex justify-content-between w-50 m-auto'>
      <Button color="success">
        Add
      </Button>
      <Button onClick={() => stateChanger(false)}>
        Cancel
      </Button>
      </div>
      
    </Form>
    </div>
  )
}
export default AddBlock;