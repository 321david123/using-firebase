import React from "react";
import { Stack, Container, Row, Col, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({ arrayTareas, correoUsuario, setArrayTareas }) => {
  async function eliminarTarea(idTareaAEliminar) {
    //crear nuevo array tareas
    const nuevoArrayTareas = arrayTareas.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAEliminar
    );
    //actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
  }
  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>{objetoTarea.descripcion}</Col>
                <Col>
                <a href={objetoTarea.url} target="_blank">
                  <Button variant="secondary">Ver Archivo</Button>
                </a>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => eliminarTarea(objetoTarea.id)}
                  >
                    Eliminar Tarea
                  </Button>
                </Col>
              </Row>
              <hr></hr>
              <></>
            </>
          );
        })}
      </Stack>
    </Container>
  );
};

export default ListadoTareas;
