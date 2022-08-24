import React from "react";

const filterBTN = ({ name, index, items, task, setPageNumber, setSpecies, setGender }) => {
  return (
    <>
    <style jsx>
      {`
      .radioBtn:checked + label{
        background-color: #0b5ed7;
        color: #fff;
      }
      input[type="radio"] {
        display:none;
      }
      `}
    </style>
      <div className='form-check'>
        <input
        onClick={() =>{
          setPageNumber(1);
          task(items);
          setSpecies(setSpecies)
          setGender(setGender)
        }
        }
          className='form-check-input radioBtn'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label className='btn btn-outline-primary' htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default filterBTN;
