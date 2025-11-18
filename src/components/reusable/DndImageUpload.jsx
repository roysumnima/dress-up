// https://dev.to/hexshift/implementing-drag-drop-file-uploads-in-react-without-external-libraries-1d31

// https://medium.com/@dprincecoder/creating-a-drag-and-drop-file-upload-component-in-react-a-step-by-step-guide-4d93b6cc21e0
// https://www.geeksforgeeks.org/reactjs/drag-and-drop-file-upload-component-with-react-hooks/

import React, { useState } from "react";

function DndImageUpload() {
  const [text, setText] = useState("Drag and drop an image file here, or click to select a file");
  const [file, setFile] = useState(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = async(e) => {
  e.preventDefault();
  console.log("Drop event:", e);
  const droppedFiles  = [];
  Array.from(e.dataTransfer.items).forEach( item => {
    if (item.kind === "file") {
      const file = item.getAsFile();
      droppedFiles.push(file);
    }
    if (item.kind === "string") {
      item.getAsString(async (data) => {
        console.log("Dropped string data:", data);
        droppedFiles.push(data);
      });
     
    }
  });

  console.log("All dropped files:", droppedFiles);
  console.log(droppedFiles[0].type);
  if (typeof droppedFiles[0] === "string") {
    try {
      const response = await fetch(droppedFiles[0]);
      const blob = await response.blob();
      const filename = droppedFiles[0].split("/").pop() || "image";
      const imageFile = new File([blob], filename, { type: blob.type });
      console.log("response:", response);
      console.log("blob:", blob);
      console.log("Fetched image file from URL:", imageFile);
      setFile(imageFile);
      setText("");
    } catch (err) {
      setText("Failed to fetch image from link.", err);
    }
  }

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