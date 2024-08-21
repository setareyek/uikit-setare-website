import { clsxMerge } from '../../utils';
import React, { forwardRef, type LinkHTMLAttributes, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const textVariants = cva('font-semibold ', {
  variants: {
    variant: {
      Description1: 'text-[8px] leading-4',
      Description2: 'text-[10px] leading-4',
      Description3: 'text-[12px] leading-5',
      body1: 'text-[14px] leading-6',
      body2: 'text-[16px] leading-7',
      title1: 'text-[18px] leading-8',
      title2: 'text-[22px] leading-[38px]',
      headLine1: 'text-[28px] leading-[48px]',
      headLine2: 'text-[36px] leading-[62px]',
      headLine3: 'text-[44px] leading-[76px]',
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
      black: 'font-black',
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
      start: 'text-start',
      end: 'text-end',
    },
    letterSpacing: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
    decoration: {
      noUnderline: 'no-underline',
      underline: 'underline',
      overline: 'overline',
      lineThrough: 'line-through',
    },
    textWrap: {
      balance: 'text-balance',
      wrap: 'text-wrap',
      noWrap: 'text-nowrap',
      pretty: 'text-pretty',
    },
    whiteSpace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      pre: 'whitespace-pre',
      preLine: 'whitespace-pre-line',
      preWrap: 'whitespace-pre-wrap',
      breakSpaces: 'whitespace-break-spaces',
    },
    href: {
      true: 'cursor-pointer',
      false: '',
    },
    fullWidth: {
      true: 'w-full ',
      false: '',
    },
  },
  compoundVariants: [],
});

export interface TextVariants {
  fullWidth?: boolean;
  href?: string;
  weight?: 'light' | 'regular' | 'bold' | 'extraBold' | 'black';
  variant?:
    | 'Description1'
    | 'Description2'
    | 'Description3'
    | 'body1'
    | 'body2'
    | 'title1'
    | 'title2'
    | 'headLine1'
    | 'headLine2'
    | 'headLine3';
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  decoration?: 'noUnderline' | 'underline' | 'overline' | 'lineThrough';
  textWrap?: 'balance' | 'wrap' | 'noWrap' | 'pretty';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'preLine' | 'preWrap' | 'breakSpaces';
  children?: ReactNode | string;
  color?: string;
  opacity?: number;
}

export interface TextProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    TextVariants,
    Partial<Pick<HTMLAnchorElement, 'target'>> {}

export const Text = forwardRef<HTMLAnchorElement, TextProps>(
  (
    {
      variant = 'body1',
      weight = 'regular',
      fullWidth = false,
      href,
      textAlign = 'justify',
      letterSpacing = 'normal',
      decoration = 'noUnderline',
      textWrap = 'balance',
      whiteSpace = 'normal',
      className,
      children,
      color = '#000000',
      opacity = 1,
      ...rest
    }: TextProps,
    ref
  ) => {
    const Component = href ? 'a' : 'span';

    return (
      <Component
        ref={ref as never}
        href={href}
        style={{ color, opacity }}
        className={clsxMerge(
          textVariants({
            href: Boolean(href),
            variant,
            fullWidth,
            weight,
            textAlign,
            letterSpacing,
            decoration,
            textWrap,
            whiteSpace,
          }),
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
export default Text;
