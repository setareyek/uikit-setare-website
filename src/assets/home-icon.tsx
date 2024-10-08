import type { SVGProps } from 'react';
import React from 'react';

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      stroke='currentColor'
      strokeWidth='1.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M2.91671 12.8333H4.98081C5.30298 12.8333 5.56414 12.5671 5.56414 12.2387V9.21958C5.56414 8.89115 5.82531 8.62491 6.1475 8.62491H7.85258C8.17476 8.62491 8.43592 8.89115 8.43592 9.21958V12.2387C8.43592 12.5671 8.69713 12.8333 9.01925 12.8333H11.0834C11.4055 12.8333 11.6667 12.5671 11.6667 12.2387V6.19516C11.6667 6.0294 11.5989 5.87117 11.4795 5.75861L7.39612 1.90812C7.17259 1.69729 6.82749 1.69729 6.60396 1.90812L2.5206 5.75861C2.40124 5.87117 2.33337 6.0294 2.33337 6.19516V12.2387C2.33337 12.5671 2.59454 12.8333 2.91671 12.8333Z' />
    </svg>
  );
}

HomeIcon.displayName = 'HomeIcon';
