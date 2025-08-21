import React, { useState, useEffect, useRef } from "react";
import pdf from "../../assets/Resume/Kalil_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjs from "../../pdfConfig";

// Worker setup for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // get container width and clamp to max 800px
        setContainerWidth(Math.min(containerRef.current.offsetWidth - 40, 800));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div id="Resume" className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-10">
      {/* Download Button - Top */}
      <div className="flex justify-center mb-6">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
        >
          <AiOutlineDownload className="text-xl" />
          Download CV
        </a>
      </div>

      {/* Resume Preview */}
      <div
        ref={containerRef}
        className="flex justify-center bg-white rounded-lg shadow-lg overflow-hidden p-4 w-11/12 md:w-4/5"
      >
        <Document file={pdf} className="flex justify-center">
          <Page
            pageNumber={1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Download Button - Bottom */}
      <div className="flex justify-center mt-6">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
        >
          <AiOutlineDownload className="text-xl" />
          Download CV
        </a>
      </div>
    </div>
  );
}
