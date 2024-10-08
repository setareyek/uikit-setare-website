import type { SVGProps } from 'react';
import React from 'react';

export function GearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12.0779 8.52224C12.1008 8.35557 12.1122 8.18335 12.1122 8.00002C12.1122 7.82224 12.1008 7.64446 12.0722 7.4778L13.2316 6.60002C13.3344 6.52224 13.363 6.37224 13.3002 6.26113L12.2036 4.41669C12.135 4.29446 11.9922 4.25558 11.8666 4.29446L10.5016 4.8278C10.216 4.61669 9.91329 4.43891 9.57631 4.30558L9.3707 2.89446C9.34786 2.76113 9.23363 2.66669 9.09655 2.66669H6.90336C6.76629 2.66669 6.65777 2.76113 6.63493 2.89446L6.42932 4.30558C6.09234 4.43891 5.78392 4.62224 5.50406 4.8278L4.13903 4.29446C4.01338 4.25002 3.8706 4.29446 3.80206 4.41669L2.71118 6.26113C2.64264 6.3778 2.66548 6.52224 2.77971 6.60002L3.93913 7.4778C3.91058 7.64446 3.88773 7.8278 3.88773 8.00002C3.88773 8.17224 3.89915 8.35557 3.92771 8.52224L2.76829 9.40002C2.66548 9.4778 2.63693 9.6278 2.69975 9.73891L3.79635 11.5834C3.86488 11.7056 4.00767 11.7445 4.13332 11.7056L5.49835 11.1722C5.78392 11.3834 6.08663 11.5611 6.4236 11.6945L6.62922 13.1056C6.65777 13.2389 6.76629 13.3334 6.90336 13.3334H9.09655C9.23363 13.3334 9.34786 13.2389 9.36499 13.1056L9.5706 11.6945C9.90758 11.5611 10.216 11.3834 10.4959 11.1722L11.8609 11.7056C11.9865 11.75 12.1293 11.7056 12.1979 11.5834L13.2945 9.73891C13.363 9.61669 13.3344 9.4778 13.2259 9.40002L12.0779 8.52224ZM7.99996 10C6.8691 10 5.94384 9.10002 5.94384 8.00002C5.94384 6.90002 6.8691 6.00002 7.99996 6.00002C9.13082 6.00002 10.0561 6.90002 10.0561 8.00002C10.0561 9.10002 9.13082 10 7.99996 10Z' />
    </svg>
  );
}

GearIcon.displayName = 'GearIcon';
