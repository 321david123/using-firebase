import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp)

const AgregarTarea = ({ correoUsuario, setArrayTareas, arrayTareas }) => {

    let urlDescarga;

  async function añadirTarea(e) {
    e.preventDefault();
    const descripcion = e.target.formDescripcion.value;
    //actualizar base de datos
    const nuevoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion,
        url: urlDescarga,
      },
    ];
    //actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    //actualizar estado
    setArrayTareas(nuevoArrayTareas);
    //limpiar form
    e.target.formDescripcion.value = "";
  }


  async function fileHandler(e){
    //detectar archivo
    const archivoLocal = e.target.files[0];
    //cargarloa firebase storage
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);
    //obtener url de descarga
    urlDescarga = await getDownloadURL(archivoRef);
}


  return (
    <Container>
      <Form onSubmit={añadirTarea}>
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="describe tu tarea"
              id="formDescripcion"
            />
          </Col>
          <Col>
            <Form.Control
              type="file"
              placeholder="Subir"
              onChange={fileHandler}
            />
          </Col>
          <Col>
            <Button type="submit">Agregar Tarea</Button>
          </Col>
        </Row>
      </Form>
      <hr></hr>
    </Container>
  );
};

export default AgregarTarea;
