import { useState } from 'react';
import Uploader from './Uploader.jsx';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = async (file) => {
    setFile(file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <h1>Deblur App</h1>
      <Uploader onUpload={handleUpload} />
      {file && <p>Uploaded: {file.name}</p>}
    </div>
  );
}

export default App;