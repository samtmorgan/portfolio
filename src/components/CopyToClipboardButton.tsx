import { ContentCopy } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react';

export function CopyToClipboardButton({
  resourceName,
  resourceValue,
}: {
  resourceName: string;
  resourceValue: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard({ text }: { text: string }) {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    }
    return null;
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard({ text: resourceValue })
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Button fullWidth variant="outlined" onClick={handleCopyClick} startIcon={!isCopied && <ContentCopy />}>
      {isCopied ? `${resourceName} Copied!` : `Copy ${resourceName}`}
    </Button>
  );
}
