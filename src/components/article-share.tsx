"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function ArticleShare() {
  const shareArticle = async () => {
    const url = window.location.href;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        toast.success("Article link copied");
        return;
      }

      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        toast.success("Article shared");
        return;
      }

      toast.error("Sharing is not available in this browser");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      toast.error("Unable to share this article");
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={shareArticle}
      aria-label="Share this article"
    >
      <Share2 className="h-3.5 w-3.5" />
      Share
    </Button>
  );
}
