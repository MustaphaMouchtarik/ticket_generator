import React, { useRef, useState, useEffect } from "react";
import "./AvatarUploader.css";

export default function AvatarUploader() {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("avatar");
    if (saved) setPreview(saved);
  }, []);

  const handleFilePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPreview(dataUrl);
      localStorage.setItem("avatar", dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="uploader-container">
      <label onClick={() => inputRef.current?.click()} className="uploader-box">
        <div className="uploader-icon"><img src="/images/icon-upload.svg"></img></div>
        <p className="uploader-subtext">Drag And Drop or Click To Upload</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="uploader-input"
          onChange={handleFilePick}
        />
      </label>
      {/*preview && (
        <div className="preview-container">
          <p className="preview-label">Preview:</p>
          <img src={preview} alt="Uploaded avatar preview" className="preview-img" />
        </div>
      )*/}
    </div>
  );
}
