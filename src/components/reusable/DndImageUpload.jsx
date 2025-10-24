import React, { useState } from "react";

function DndImageUpload() {
  const [file, setFile] = useState(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
  e.preventDefault();
  const droppedFiles = Array.from(e.dataTransfer.files);
  const imageFiles = droppedFiles.filter(file => file.type.startsWith("image/"));
  setFile(imageFiles[0]);
};

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      style={{
        height: '100%',
        width: '100%',
        border: isDragging ? '2px dashed #4A90E2' : '2px dashed #ff0707ff',
        backgroundColor: isDragging ? '#69f5ffff' : '#F0F8FF',
      }}
    >
        {(isDragging && !file)? "Release to upload image" : ""}
        {file && <img
          src={URL.createObjectURL(file)}
          alt={`Uploaded ${file.name}`}
          onClick={e => {
            if (e.metaKey) {
              URL.revokeObjectURL(e.target.src);
              setFile(null);
            }
          }}
          className="image-fit" 
          />}
    </div>
  );
}

export default DndImageUpload;