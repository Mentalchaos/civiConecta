const AddQuestionInput = ({ description, changeAlternative, letter }) => {
  return (
    <input className='option' onChange={(e) => changeAlternative(letter, e.target.value)} value={description} placeholder='Añada una opción.'></input>
  )
}

export default AddQuestionInput;