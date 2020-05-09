import React from 'react';
import withFileUpload from '../HOC/withFileUpload'

const SquareFiles = (props) => (
  <div className="square">
    <form>
      <input type="file" onChange={props.addFile}/>
      </form>
      {props.files.map((file, index) => (
        <div className='image' key={index}>
          <img
            src={file}
            alt="Dani es feliz"
          />
          </div>
      ))}         
  </div>
)

export default withFileUpload(SquareFiles);
