import React, { useState } from 'react'
import { Button } from "reactstrap";
import { Form,FormGroup,Input,Label} from 'reactstrap';


const LoginForm = (props)=> {
  
  return (
    <>
    <Form inline>
      <FormGroup floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">
          Email
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">
          Şifre
        </Label>
      </FormGroup>
      {' '}
      <Button color="success">
        Giriş
      </Button>
    </Form>
  </>
  )
}

export default LoginForm;
