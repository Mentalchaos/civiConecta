import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from './useListEstablishment';
import Button from 'src/components/UI/Button';

const ActionPanel = () => {
  const navigate = useNavigate();
  const { states } = useContext(ListContext);

  const handleGoToEstablishment = () => {
    console.log('states', states);
    const establishmentId = states.selectedEstablishment.id;
    navigate(`/admin/manager/${establishmentId}`);
  };

  return (
    <div
      // style={{
      //   opacity: showDeleteOption ? '1' : '0',
      //   zIndex: showDeleteOption ? 'initial' : '-999',
      // }}
      className="content__difused"
    >
      <Button
        // text={institutionSelected.active ? 'Deshabilitar' : 'Habilitar'}
        text={"Habilitar"}
      // onClick={() => setConfirmAction(true)}
      // customStyles={buttonDeleteStyles}
      />
      <Button
        onClick={handleGoToEstablishment}
        text="Ir a institución"
      // customStyles={buttonDeleteStyles}
      />
    </div>
  );
};

export default ActionPanel;
