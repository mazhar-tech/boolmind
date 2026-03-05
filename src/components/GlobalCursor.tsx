'use client';

import { useEffect } from 'react';

const CUSTOM_CURSOR = 'url("/cursors/pointer.svg") 3 12, pointer';

/** Applies custom cursor to document root after mount so it is not overridden by other CSS. */
export function GlobalCursor() {
  useEffect(() => {
    document.documentElement.style.cursor = CUSTOM_CURSOR;
    document.body.style.cursor = CUSTOM_CURSOR;
  }, []);
  return null;
}
