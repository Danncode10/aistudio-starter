"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/src/components/ui/button";

interface CopyPromptButtonProps {
  promptText: string;
}

export function CopyPromptButton({ promptText }: CopyPromptButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted in iframe
      const textArea = document.createElement("textarea");
      textArea.value = promptText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      id="copy-starter-prompt-btn"
      variant={copied ? "secondary" : "default"}
      size="default"
      onClick={handleCopy}
      className="w-full sm:w-auto font-medium"
      aria-label="Copy AI Studio starter prompt"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          <span>Copied to Clipboard!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          <span>Copy AI Studio Prompt</span>
        </>
      )}
    </Button>
  );
}
