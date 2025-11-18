// https://dev.to/hexshift/implementing-drag-drop-file-uploads-in-react-without-external-libraries-1d31

// https://medium.com/@dprincecoder/creating-a-drag-and-drop-file-upload-component-in-react-a-step-by-step-guide-4d93b6cc21e0
// https://www.geeksforgeeks.org/reactjs/drag-and-drop-file-upload-component-with-react-hooks/

import React, { useState } from "react";

const handleImageUrlDrop = async (url) => {
    try {
      console.log("Fetching image...");
      const response = await fetch(url);
      const blob = await response.blob();
      if (!blob.type.startsWith("image/")) {
        console.log("Dropped link is not an image.");
        return;
      }
      const filename = url.split("/").pop() || "image";
      const imageFile = new File([blob], filename, { type: blob.type });
      console.log(imageFile);
      console.log("");
    } catch (err) {
      console.log("Failed to fetch image from link.", err);
    }
  };

function DndImageUpload() {
  const [text, setText] = useState("Drag and drop an image file here, or click to select a file");
  const [file, setFile] = useState(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
  e.preventDefault();
  console.log("Drop event:", e);
  const droppedFiles = Array.from(e.dataTransfer.files)
  

  if (droppedFiles.length !== 1) {
    setText(`${droppedFiles.length} file(s) dropped. Please drop a single file.`);
    if (droppedFiles.length > 1) console.log(droppedFiles, "Too many files dropped");
    if (droppedFiles.length === 0) console.log("No files dropped", droppedFiles);
    return;
  }

  const imageFiles = droppedFiles.filter(file => file.type.startsWith("image/"));

  if (imageFiles.length !== 1) {
    setText(`File type is: ${droppedFiles[0].type}. Please drop an image file.`);
    console.log(droppedFiles, "Invalid file type");
    return;
  }

  setText("");
  setFile(imageFiles[0]);
  console.log(imageFiles[0], "File accepted.", e.dataTransfer, droppedFiles);
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
        <p>{text}</p>
        {file && <img
          src={URL.createObjectURL(file)}
          alt={`Uploaded ${file.name}`}
          onClick={e => {
            if (e.metaKey) {
              URL.revokeObjectURL(e.target.src);
              setFile(null);
              setText("Drag and drop an image file here, or click to select a file");
            }
          }}
          className="image-fill" 
          />}
    </div>
  );
}

export default DndImageUpload;