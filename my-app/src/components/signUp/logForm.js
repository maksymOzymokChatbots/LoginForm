import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserData } from '../signIn/style';
  
import {InputField} from './style';
import {Input} from './style';
import {Header} from './style';
import {Acceptation} from './style';
import {Button} from './style';
import {UserTip} from './style';
import {Links} from './style';
import {Footer} from './style';
import {FirstLastName} from './style';
import {InputFirstLast} from './style';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    
    return (
        <div>
            <Header> Sign in</Header>
            <UserData>
              <FirstLastName>
                  <InputField>
                      <InputFirstLast type='text' id='firstName' value={firstName} placeholder = 'First Name*' onChange={(e) => setfirstName(e.target.value)} />
                  </InputField>
                  <InputField>
                      <InputFirstLast type='text' id='lastName' value={lastName} placeholder = 'Last Name*' onChange={(e) => setlastName(e.target.value)} />
                  </InputField>
                </FirstLastName>
          <InputField>
                <Input type='email' id='email' value={email} placeholder = 'Email Address*' onChange={(e) => setEmail(e.target.value)} />
             </InputField>
          <InputField>
            <Input type='password' id='password' value={password} placeholder = 'Password*' onChange={(e) => setPassword(e.target.value)} />
          </InputField>
          <InputField>
                <input type = 'checkbox' id = 'checkbox'/>
                <Acceptation> I want to receive inspiration, marketing <br/>promotions and updates via mail </Acceptation>
          </InputField>
          <Button>
              Sign up
          </Button>
            <UserTip>
                    <Links>
                        <Link to ="/signIn">Already have an account? Sign In</Link>
                    </Links>
            </UserTip>
            </UserData>
            <Footer>
                Copyright © Your Website 2021
            </Footer>
          </div>
      );

}

