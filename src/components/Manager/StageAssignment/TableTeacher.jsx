import React, { useState, useEffect } from "react"
import './TableTeacher.css'

const TableTeachers = ({ teachersData }) => {

  const headers = ['Establecimiento:', ' Nombre', 'Correo', 'Contraseña']

  return (
    <table className="table-container">
      <thead className="thead-container">
        <tr>
          {headers.map(headerName => (
            <th key={headerName}>
              {headerName}
            </th>
          ))}
        </tr>

      </thead>
      <tbody className="tbody-container">
        {teachersData.map((data, key) => (
          <tr key={key}>
            <td>{data.establishment}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
          </tr>
        ))}

      </tbody>
    </table>

  )
}
export default TableTeachers;