import React, { useRef, useState, useEffect } from "react";

export default function AvatarUploader() {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Load saved avatar from localStorage on mount
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
    <div className="w-full max-w-md mx-auto">
      <label
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer border-2 border-dashed border-neutral-600 rounded-xl p-6 flex flex-col items-center justify-center bg-neutral-900/60 hover:bg-neutral-800 transition"
      >
        <div className="text-3xl mb-2">⬆️</div>
        <p className="text-sm text-neutral-300">Click to upload</p>
        
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleFilePick}
        />
      </label>

      {preview && (
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-400 mb-2">Preview:</p>
          <img
            src={preview}
            alt="Uploaded avatar preview"
            className="mx-auto h-24 w-24 object-cover rounded-full border border-neutral-600"
          />
        </div>
      )}
    </div>
  );
}
