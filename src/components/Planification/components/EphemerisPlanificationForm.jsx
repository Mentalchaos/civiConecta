import { useContext } from 'react';
import { PlanificationContext } from '../context';

const EphemerisPlanificationForm = () => {
  const { actions, setters, states } = useContext(PlanificationContext);
  const planning = states.planning;

  const handleSubmit = evt => {
    evt.preventDefault();

    actions
      .updatePlanification()
      .then(() => {
        alert('Se han guardado sus cambios');
        window.location.reload();
      });
  };

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      {/* se pidió quitar campo "Tema clase" */}
      {/* <div className="form-group planning">
        <label>Tema clase:</label>
        <input
          type="text"
          name="topic"
          defaultValue={planning.topic}
          onChange={setters.changeField('topic')}
        />
      </div> */}

      <div className="form-group planning">
        <label>Objetivo</label>
        <input
          type="text"
          name="objective"
          defaultValue={planning.objective}
          onChange={setters.changeField('objective')}
        />
      </div>

      <div className="form-group planning">
        <label>Materiales:</label>
        <div className="group__container-materials">
          <label>Docente:</label>
          <input
            type="text"
            name="teacherMaterials"
            defaultValue={planning.teacherMaterials}
            onChange={setters.changeField('teacherMaterials')}
            placeholder="Materiales Docente"
          />
          <label>Estudiante:</label>
          <input
            type="text"
            name="studentMaterials"
            defaultValue={planning.studentMaterials}
            onChange={setters.changeField('studentMaterials')}
            placeholder="Materiales Estudiante"
          />
        </div>
      </div>

      <div className="form-group planning">
        <label>Actividad de inicio:</label>
        <input
          type="text"
          name="startActivity"
          defaultValue={planning.startActivity}
          onChange={setters.changeField('startActivity')}
        />
      </div>

      <div className="form-group planning">
        <label>Actividad central:</label>
        <input
          type="text"
          name="mainActivity"
          defaultValue={planning.mainActivity}
          onChange={setters.changeField('mainActivity')}
        />
      </div>

      <div className="form-group planning">
        <label>Actividad de cierre:</label>
        <input
          type="text"
          name="endActivity"
          defaultValue={planning.endActivity}
          onChange={setters.changeField('endActivity')}
        />
      </div>

      <div className="form-group planning">
        <label>Fecha:</label>
        <input
          type="text"
          name="date"
          defaultValue={states.date}
          onChange={setters.changeField('date')}
        />
      </div>

      <div>
        <input
          className="form-group button"
          type="submit"
          value={states.loading ? 'Guardando...' : 'Guardar'}
          disabled={states.loading}
        />
      </div>
    </form>
  );
};

EphemerisPlanificationForm.displayName = 'EphemerisPlanificationForm';

export default EphemerisPlanificationForm;
