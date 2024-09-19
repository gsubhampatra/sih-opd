import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const OCRScanner = () => {
  const [scannedText, setScannedText] = useState('');

  const handleScan = () => {
    // In a real application, this would integrate with an OCR API
    // For this example, we'll simulate OCR with a placeholder text
    const simulatedOCRResult = "John Doe\nDOB: 1990-01-01\nAddress: 123 Main St, City, Country";
    setScannedText(simulatedOCRResult);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <h2 className="mb-4 text-2xl font-bold">OCR Scanner</h2>
      <div className="flex flex-col items-center">
        <button
          onClick={handleScan}
          className="flex items-center px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          <Camera className="mr-2" />
          Scan Document
        </button>
        {scannedText && (
          <div className="p-4 mt-4 border rounded-md">
            <h3 className="mb-2 font-bold">Scanned Text:</h3>
            <pre className="whitespace-pre-wrap">{scannedText}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRScanner;