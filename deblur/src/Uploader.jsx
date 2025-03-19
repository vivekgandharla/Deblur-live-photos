import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

function Uploader({ onUpload }) {
  const onDrop = useCallback((files) => {
    const file = files[0];
    onUpload(file);
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag & drop a Live Photo or Video here, or click to select</p>
    </div>
  );
}
Uploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default Uploader;