import { clsxMerge } from '../../utils';
import React, { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'group inline-flex items-center justify-center whitespace-nowrap rounded-lg align-middle font-semibold ' +
    'leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: ' stroke-Purple-01 font-bold',
        outlined:
          'border-[1.5px] border-Purple-05 bg-Purple-01 stroke-Purple-05  hover:border-blue-700' +
          'hover:stroke-Purple-05 active:stroke-Purple-07 ',
        text: 'stroke-Purple-05 px-2 hover:stroke-BlueGray-07 ' + ' active:stroke-BlueGray-07  ',
      },
      size: {
        xxLarge: 'h-[56px] min-w-[195px] gap-2 px-4 py-[9px] text-[22px] leading-[38px] [&>svg]:size-6',
        xLarge: 'h-[48px] min-w-[192px] gap-2 px-4 py-[9px] text-[18px] leading-8 [&>svg]:size-6',
        large: 'h-[40px] min-w-[158px] gap-2 px-4 py-[6px] text-[16px] leading-7 [&>svg]:size-5',
        medium: 'h-[36px] min-w-[152px] gap-1.5 px-4 py-[6px] text-[14px] leading-6 [&>svg]:size-5',
        small: 'h-[32px] min-w-[132px] gap-1.5 px-4 py-1 text-[12px] leading-5 [&>svg]:size-4',
        xSmall: 'h-[28px] min-w-[121px] gap-1 px-4 py-[6px] text-[10px] leading-4 [&>svg]:size-4',
      },
      disabled: {
        true: '',
        false: '',
      },
      href: {
        true: 'cursor-pointer',
        false: '',
      },
      iconOnly: {
        true: 'p-0',
        false: '',
      },
      endIcon: {
        true: '',
        false: '',
      },
      startIcon: {
        true: '',
        false: '',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: ['primary'],
        class: 'disabled:bg-Purple-04 disabled:hover:bg-Purple-04',
      },
      {
        variant: ['outlined'],
        class: 'disabled:border-Purple-04 disabled:bg-transparent disabled:stroke-Purple-04 disabled:text-Purple-04',
      },
      {
        variant: ['text'],
        class: 'disabled:bg-transparent disabled:stroke-Purple-04 disabled:text-Purple-04',
      },
      {
        variant: ['primary', 'outlined', 'text'],
        iconOnly: true,
        endIcon: true,
        startIcon: false,
        class: 'min-w-0 px-3',
      },
      {
        variant: ['primary', 'outlined', 'text'],
        iconOnly: true,
        endIcon: false,
        startIcon: true,
        class: 'min-w-0 px-3',
      },
    ],
  }
);

export interface ButtonVariants {
  disabled?: boolean;
  startIcon?: boolean;
  fullWidth?: boolean;
  href?: boolean;
  iconOnly?: boolean;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
  endIcon?: boolean;
  variant?: 'primary' | 'outlined' | 'text';
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    Omit<ButtonVariants, 'disabled' | 'href' | 'endIcon' | 'startIcon'>,
    Partial<Pick<HTMLAnchorElement, 'target'>> {
  href?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  bgColorActive?: string;
  textColor?: string;
  textColorHover?: string;
  textColorActive?: string;
  borderColor?: string;
  radius?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      iconOnly = false,
      fullWidth = false,
      href,
      className,
      children = 'text',
      endIcon,
      startIcon,
      bgColor = `${variant === 'primary' ? '#6F59CA' : variant === 'outlined' ? '#FCFBFE' : 'transparent'}`,
      bgColorHover = `${variant === 'primary' ? '#3B1E85' : variant === 'outlined' ? '#F5F3FC' : '#F0F2F5'}`,
      bgColorActive = `${variant === 'primary' ? '#251354' : variant === 'outlined' ? '#EFEAFA' : '#C2CCD6'}`,
      textColor = `${variant === 'primary' ? '#FCFBFE' : variant === 'outlined' ? '#6F59CA' : '#6F59CA'}`,
      textColorHover = `${variant === 'primary' ? '#FCFBFE' : variant === 'outlined' ? '#6F59CA' : '#251354'}`,
      textColorActive = `${variant === 'primary' ? '#FCFBFE' : variant === 'outlined' ? '#251354' : '#251354'}`,
      borderColor = '#6F59CA',
      radius = '8px',
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const Component = href && !rest.disabled ? 'a' : 'button';

    return (
      <Component
        ref={ref as never}
        type='button'
        href={href}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = bgColorHover;
          e.currentTarget.style.color = textColorHover;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = bgColor;
          e.currentTarget.style.color = textColor;
        }}
        onMouseDown={e => {
          e.currentTarget.style.backgroundColor = bgColorActive;
          e.currentTarget.style.color = textColorActive;
        }}
        onMouseUp={e => {
          e.currentTarget.style.backgroundColor = bgColorHover;
          e.currentTarget.style.color = textColorHover;
        }}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: `${variant === 'outlined' ? '' : borderColor}`,
          borderRadius: `${radius}`,
        }}
        aria-disabled={rest?.disabled}
        className={clsxMerge(
          buttonVariants({
            href: Boolean(href),
            variant,
            size,
            iconOnly,
            endIcon: Boolean(endIcon),
            startIcon: Boolean(startIcon),
            disabled: Boolean(rest?.disabled),
            fullWidth,
          }),
          className
        )}
        {...rest}
      >
        {endIcon}
        {children && <span>{children}</span>}
        {startIcon}
      </Component>
    );
  }
);
Button.displayName = 'Button';
export default Button;
