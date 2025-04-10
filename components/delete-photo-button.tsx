"use client";

import { Button } from "@/components/ui/button";
import { deletePhoto } from "@/lib/actions";

export function DeletePhotoButton({ photoId }: { photoId: string }) {
  const handleDelete = async () => {
    if (confirm("本当にこの投稿を削除しますか？")) {
      await deletePhoto(photoId);
      window.location.href = "/";
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      投稿を削除
    </Button>
  );
}