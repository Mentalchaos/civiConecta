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
      });
  };

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      <div className="form-group planning">
        <label>Tema clase:</label>
        <input
          type="text"
          name="topic"
          value={planning?.topic}
          onChange={setters.changeField('topic')}
        />
      </div>

      <div className="form-group planning">
        <label>Objetivo</label>
        <input
          type="text"
          name="objective"
          value={planning.objective}
          onChange={setters.changeField('objective')}
        />
      </div>

      <div className="form-group planning">
        <label>Conceptos a tratar:</label>
        <input
          type="text"
          name="keywords"
          value={planning.keywords}
          onChange={setters.changeField('keywords')}
        />
      </div>

      <div className="form-group planning">
        <label>Materiales:</label>
        <div className="group__container-materials">
          <label>Docente:</label>
          <input
            type="text"
            name="teacherMaterials"
            value={planning.teacherMaterials}
            onChange={setters.changeField('teacherMaterials')}
            placeholder="Materiales Docente"
          />
          <label>Estudiante:</label>
          <input
            type="text"
            name="studentMaterials"
            value={planning.studentMaterials}
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
          value={planning.startActivity}
          onChange={setters.changeField('startActivity')}
        />
      </div>

      <div className="form-group planning">
        <label>Actividad central:</label>
        <input
          type="text"
          name="mainActivity"
          value={planning.mainActivity}
          onChange={setters.changeField('mainActivity')}
        />
      </div>

      <div className="form-group planning">
        <label>Actividad de cierre:</label>
        <input
          type="text"
          name="endActivity"
          value={planning.endActivity}
          onChange={setters.changeField('endActivity')}
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
