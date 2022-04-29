
import { useState, useEffect } from 'react';
import './App.css';
import { db } from './fb-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { Cards } from './components/Cards';

function App() {
  const [newName, setNewName] = useState("");
  const [newNit, setNewNit] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newDirection, setNewDirection] = useState("");

  const [companies, setCompanies] = useState([]);

  const empresasCollectionRef = collection(db, 'empresa');

  const createCompany = async () => {
    await addDoc(empresasCollectionRef, {nombre: newName, direccion: newDirection, nit:newNit, fechaFundacion: newDate})
    window.location.reload();
  }
  
  const updateCompany = async (id, nombre, nit, direccion) => {
    let nombreNuevo = prompt('Ingrese el nombre', nombre); 
    let nitNuevo = prompt('Ingrese el nit', nit); 
    let direccionNueva = prompt('Ingrese la direccion', direccion); 
    
    const userDoc = doc(db, "empresa", id)
    const newFields = { nombre: nombreNuevo, direccion: direccionNueva, nit: nitNuevo };
    await updateDoc( userDoc,newFields);
    window.location.reload();
  }
  
  const deleteCompany = async ( id ) => {
    const userDoc = doc(db, "empresa", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }


  useEffect(() => {
  
    const getCompanies = async () => {
      const data = await getDocs(empresasCollectionRef)
      console.log(data)
      setCompanies(data.docs.map((doc) => ({ ...doc.data(),id: doc.id })))
    };

    getCompanies();

  }, [])
  

  return (
    <div className="App container">
      <input 
        placeholder='Nombre'
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input 
        placeholder='NIT'
        onChange={(event) => {
          setNewNit(event.target.value);
        }}
      />
      <input
       placeholder='Fecha de fundación' 
       type={"date"}
       onChange={(event) => {
        setNewDate(event.target.value);
      }}
      />
      <input 
        placeholder='Dirección'
        onChange={(event) => {
          setNewDirection(event.target.value);
        }}
      />

      <button onClick={createCompany } >Crear empresa</button>


      { companies.map((company) => { 
        return (

            <Cards deleteCompany={deleteCompany} updateCompany={updateCompany} nombre = {company.nombre} id = {company.id} nit={company.nit} direccion = {company.direccion} fecha={company.fechaFundacion}/>

        )
      })}
    </div>
  );
}

export default App;
