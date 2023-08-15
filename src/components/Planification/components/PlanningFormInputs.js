const PlanningFormInputs = () => {
  return (
    <form className="planning-form" /*onSubmit={handleSubmit} */>
      <div className="form-group planning">
        <label>Tema clase:</label>
        <input type="text" name="topic" /*value={values.topic} onChange={handleInputChange}*/ />
      </div>

      <div className="form-group planning">
        <label>Objetivo</label>
        <input type="text" name="objective" /*value={values.objective} onChange={handleInputChange}*/ />
      </div>
      <Visible condition={true} /*condition={type != 2} */>
        <div className="form-group planning">
          <label>Conceptos a tratar:</label>
          <input type="text" name="keywords" /*value={values.keywords} onChange={handleInputChange} */ />
        </div>
      </Visible>
      <div className="form-group planning">
        <label>Materiales:</label>
        <div className="group__container-materials">
          <label>Docente:</label>
          <input
            type="text"
            name="teacherMaterials"
            /*value={values.teacherMaterials}
            onChange={handleInputChange}*/
            placeholder="Materiales Docente"
          />
          <label>Estudiante:</label>
          <input
            type="text"
            name="studentMaterials"
            /*value={values.studentMaterials}
            onChange={handleInputChange}*/
            placeholder="Materiales Estudiante"
          />
        </div>
      </div>
      <div className="form-group planning">
        <label>Actividad de inicio:</label>
        <input type="text" name="startActivity" /*value={values.startActivity} onChange={handleInputChange} */ />
      </div>
      <div className="form-group planning">
        <label>Actividad central:</label>
        <input type="text" name="mainActivity" /*value={values.mainActivity} onChange={handleInputChange}*/ />
      </div>
      <div className="form-group planning">
        <label>Actividad de cierre:</label>
        <input type="text" name="endActivity" /*value={values.endActivity} onChange={handleInputChange}*/ />
      </div>
      <Visible condition={true} /*condition={type == 2} */>
        <div className="form-group planning">
          <label>Fecha:</label>
          <input placeholder="DIA-MES" type="text" name="date" /*value={values.date} onChange={handleInputChange}*/ />
        </div>
      </Visible>
      <div>
        <input
          className="form-group button"
          type="submit"
        /*value={states.isLoading ? 'Guardando...' : 'Guardar'}
        disabled={states.isLoading} */
        />
      </div>
    </form>
  )
}

PlanningFormInputs.displayName = 'PlanningFormInputs';

export default PlanningFormInputs;
