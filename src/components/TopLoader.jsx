'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
import '../app/page.module.css'
import { usePathname, useSearchParams } from 'next/navigation';

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // petit délai pour éviter un clignotement

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  return null;
}
