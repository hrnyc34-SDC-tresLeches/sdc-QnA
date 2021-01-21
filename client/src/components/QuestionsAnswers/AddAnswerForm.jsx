import React, {useState} from 'react';

const AddAnswerForm = ({ productName, close, qBody }) => {

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    let image = URL.createObjectURL(e.target.files[0]);
    setImages(arr => [...arr, image])
  };

  const transferClick = () => {
    document.getElementById("imageUploader").click()

  }

  let uploadButton =  <div id="uploadButton" onClick={transferClick}>+</div>
  if (images.length >= 5) {
    uploadButton = null;
  }

  return (
    <div id="addQuestionPage">
      <h1>Submit Your Answer</h1>
      <h2>{productName} : {qBody}</h2>
      <div id="addQuestionFormContainer">
      <form id="addQuestionForm">
        <label htmlFor="answerInput">Your Answer</label>
        <input type="text" id="answerInput" maxLength="1000"></input>
        <br/><br/>
        <label htmlFor="aNicknameInput">What is your nickname?</label>
        <input type="text" id="aNicknameInput" maxLength="60" placeholder="Example: jack543!"></input>
        <br/>
        <span className="formWarning">For privacy reasons, do not use your full name or email address</span>
        <br/><br/>
        <label htmlFor="aEmailInput">What is your email?</label>
        <input type="text" id="aEmailInput" maxLength="60" placeholder="Example: jack@email.com"></input>
        <br/>
        <span className="formWarning">For authentication reasons, you will not be emailed</span>
        <br/><br/>
        <input id="imageUploader" type="file" accept="image/*" onChange={handleImageUpload}></input>
      </form>
      <span id="uploadPhotosLabel">Upload your photos</span>
      <span className="formWarning">You may upload up to 5 photos</span>
      {uploadButton}
      {images.map((image) => (
        <img className="answerImage" src={image}/>
      ))}
      </div>

      <button id="submitButton" onClick={close}>Submit</button>
      <span id="closeX" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
    </div>
  )
}

export default AddAnswerForm;