import type { SVGProps } from 'react';
import React from 'react';

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5185_271)'>
        <path
          d='M14.6667 14.6666V13.3333C14.6667 12.626 14.3858 11.9478 13.8856 11.4477C13.3856 10.9476 12.7073 10.6666 12 10.6666H6.66671C5.95946 10.6666 5.28119 10.9476 4.78109 11.4477C4.28099 11.9478 4.00004 12.626 4.00004 13.3333V14.6666M4.00004 8.66665C3.29279 8.66665 2.61452 8.94758 2.11442 9.44771C1.61433 9.94778 1.33337 10.626 1.33337 11.3333V12.6666M5.10096 6.6565C4.68173 6.61982 4.27714 6.48445 3.92026 6.26144C3.56337 6.03844 3.26434 5.73413 3.04759 5.37341C2.83085 5.01269 2.70256 4.6058 2.6732 4.186C2.64385 3.76619 2.71426 3.3454 2.87869 2.95803C3.04313 2.57066 3.2969 2.2277 3.61927 1.95719C3.94165 1.68669 4.32346 1.49632 4.73351 1.40166C5.14355 1.30699 5.57017 1.31072 5.9785 1.41252C6.38683 1.51433 6.76526 1.71133 7.08287 1.98742M9.33337 8.66665C10.8061 8.66665 12 7.47271 12 5.99998C12 4.52722 10.8061 3.33331 9.33337 3.33331C7.86061 3.33331 6.66671 4.52722 6.66671 5.99998C6.66671 7.47271 7.86061 8.66665 9.33337 8.66665Z'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_5185_271'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

UsersIcon.displayName = 'UsersIcon';
