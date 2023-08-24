import React from "react";
import './PlanningFilesTable.css';
import deleteIcon from 'src/assets/Icons/icon-delete.png';
import editIcon from 'src/assets/Icons/icon-edit.png';

const PlanningFilesTable = ({ tableData, actions, setShowEditModal, openDataToEdit }) => {
  const headers = ['Nombre', 'Url', 'Borrar', 'Editar'];

  const gettingId = async id => {
    await actions.removeDocument(id);
    window.location.reload();
  }

  const onEdit = async (id) => {
    await openDataToEdit(id);
    setShowEditModal(true);
  }

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
        {tableData && tableData.map(data => (
          <tr key={data.id}>
            <td>{data.filename}</td>
            <td>{data.filepath}</td>
            <td><img className="table-icon-actions" src={deleteIcon} onClick={() => gettingId(data.id)}/></td>
            <td><img className="table-icon-actions" src={editIcon} onClick={() => onEdit(data.id)}/></td>
          </tr>
        ))}

      </tbody>
    </table>

  )
}
export default PlanningFilesTable;
