'use client';

import { useState } from 'react';

export default function useToggleOpen() {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };
  return { open, handleToggleOpen };
}
