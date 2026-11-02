'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  function close() {
    setOpen(false);
  }
  return (
    <div className="mobile-navigation">
      <Button
        ref={button}
        variant="ghost"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? 'CLOSE' : 'MENU'}
      </Button>
      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <a onClick={close} href="#work">
          Work
        </a>
        <a onClick={close} href="#about">
          About
        </a>
        <a
          onClick={close}
          href="https://github.com/megzaaat"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a onClick={close} href="#contact">
          Let’s talk
        </a>
      </nav>
    </div>
  );
}
