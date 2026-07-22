import { Upload } from "lucide-react";
import { useRef } from "react";

function UploadButton({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    onUpload(file);

    e.target.value = "";
  };

  return (
    <>
      <button
        onClick={() => fileInputRef.current.click()}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto sm:px-5 sm:py-3"
      >
        <Upload className="h-4 w-4 shrink-0" />
        <span>Import CSV</span>
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={handleChange}
      />
    </>
  );
}

export default UploadButton;
