import React from 'react'

import firebaseApp from '../credenciales';
import {getAuth, signOut} from "firebase/auth";
import { Button,Container } from 'react-bootstrap';
const auth = getAuth(firebaseApp);

export const Home = () => {
  return <Container>
        <h4>
            holam sesion iniciada
        </h4>
        <Button onClick={() => {
            signOut(auth)
        }}>Cerrar sesion</Button>

  </Container>
}

export default Home;