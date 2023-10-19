"use client";
import React, { useState } from "react";

type ClipboardProps = {
  code: string; // Define the prop type for code
};

const Clipboard: React.FC<ClipboardProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = code; // Replace with the text you want to copy
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  return (
    <div>
      {copied ? (
        <span className="text-categoryGreenBg">Copied to clipboard!</span>
      ) : (
        <button onClick={copyToClipboard}>Copy</button>
      )}
    </div>
  );
};

export default Clipboard;
