import React, { useRef, useState } from "react";
import "./AvatarUploader.css";

export default function AvatarUploader({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  // Handle selecting a file
  const handleFilePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPreview(dataUrl);
      if (onUpload) onUpload(dataUrl); // send to parent if needed
    };
    reader.readAsDataURL(file);
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        setPreview(dataUrl);
        if (onUpload) onUpload(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="uploader-box"
      onClick={() => inputRef.current?.click()}   // custom click (no label needed)
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {!preview ? (
        <>
          <div className="uploader-icon">
            <img src="/images/icon-upload.svg" alt="upload icon" />
          </div>
          <p className="uploader-subtext">Drag & Drop or Click To Upload</p>
        </>
      ) : (
        <div className="preview-container">
          <img src={preview} alt="avatar preview" className="preview-img" />
        </div>
      )}

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        className="uploader-input"
        style={{ display: "none" }}
        onChange={handleFilePick}
      />
    </div>
  );
}
