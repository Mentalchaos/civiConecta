

const Items = ({ name, count, date }) => {
  return (
    <div className='items'>
      <p> {date} </p>
      <div className='text-box'>
        <p className='text-box-p1'> {name} </p>
        <p className='text-box-p2'> {count} Documentos adjuntos </p>
        <p className='text-box-p3'> OA: </p>
      </div>
    </div>
  );
};

export default Items;