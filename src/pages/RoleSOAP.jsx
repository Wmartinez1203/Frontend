import { useState } from 'react'

function RoleSOAP() {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [responseXml, setResponseXml] = useState('')

  const URL = import.meta.env.VITE_API_GATEWAY;

  console.log('API Gateway URL:', URL)
  
  const endpoints = {
    create: `${URL}/soap/roles/create`,
    delete: `${URL}/soap/roles/delete`,
    update: `${URL}/soap/roles/update`,
    getById: `${URL}/soap/roles/getbyid`,
    getAll: `${URL}/soap/roles/getall`
  }

  const sendSOAP = async (endpoint, xmlBody) => {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml'
        },
        body: xmlBody
      })
      const text = await res.text()
      setResponseXml(text)
    } catch (err) {
      setResponseXml('Error al enviar solicitud SOAP.')
    }
  }

  const createRole = () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
         <soapenv:Header/>
         <soapenv:Body>
            <tem:Create>
               <tem:role>
                  <tem:Id>0</tem:Id>
                  <tem:Nombre>${nombre}</tem:Nombre>
                  <tem:Descripcion>${descripcion}</tem:Descripcion>
               </tem:role>
            </tem:Create>
         </soapenv:Body>
      </soapenv:Envelope>`
    sendSOAP(endpoints.create, xml)
  }

  const deleteRole = () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
         <soapenv:Header/>
         <soapenv:Body>
            <tem:Delete>
               <tem:id>${id}</tem:id>
            </tem:Delete>
         </soapenv:Body>
      </soapenv:Envelope>`
    sendSOAP(endpoints.delete, xml)
  }

  const updateRole = () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:rol="http://schemas.datacontract.org/2004/07/RoleManagementService.Models">
         <soapenv:Header/>
         <soapenv:Body>
            <tem:Update>
               <tem:role>
                  <rol:Id>${id}</rol:Id>
                  <rol:Nombre>${nombre}</rol:Nombre>
                  <rol:Descripcion>${descripcion}</rol:Descripcion>
               </tem:role>
            </tem:Update>
         </soapenv:Body>
      </soapenv:Envelope>`
    sendSOAP(endpoints.update, xml)
  }

  const getById = () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
         <soapenv:Header/>
         <soapenv:Body>
            <tem:GetById>
               <tem:id>${id}</tem:id>
            </tem:GetById>
         </soapenv:Body>
      </soapenv:Envelope>`
    sendSOAP(endpoints.getById, xml)
  }

  const getAll = () => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
         <soapenv:Header/>
         <soapenv:Body>
            <tem:GetAll/>
         </soapenv:Body>
      </soapenv:Envelope>`
    sendSOAP(endpoints.getAll, xml)
  }

  return (
    <div className="container mt-4">
      <h2>Gestión de Roles (SOAP)</h2>

      <div className="row">
        <div className="col-md-6">
          <input className="form-control mb-2" placeholder="ID (para eliminar, actualizar o consultar)" onChange={e => setId(e.target.value)} />
          <input className="form-control mb-2" placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
          <input className="form-control mb-2" placeholder="Descripción" onChange={e => setDescripcion(e.target.value)} />

          <div className="d-flex flex-wrap gap-2 mt-2">
            <button className="btn btn-success" onClick={createRole}>Crear</button>
            <button className="btn btn-warning" onClick={updateRole}>Actualizar</button>
            <button className="btn btn-danger" onClick={deleteRole}>Eliminar</button>
            <button className="btn btn-info" onClick={getById}>Buscar por ID</button>
            <button className="btn btn-secondary" onClick={getAll}>Mostrar todos</button>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h5>Respuesta SOAP:</h5>
          <pre className="bg-light p-3" style={{ height: 300, overflow: 'auto', fontSize: '0.85rem' }}>
            {responseXml}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default RoleSOAP
