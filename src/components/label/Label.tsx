import { clsxMerge } from '../../utils';
import { type LabelHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import React from 'react';

const labelVariants = cva(
  'flex items-center font-medium leading-none transition-colors duration-300 ease-in-out peer-disabled:opacity-70',
  {
    variants: {
      size: {
        large: 'text-lg',
        medium: 'text-sm',
        small: 'text-xs',
      },
    },
  }
);

export interface LabelVariants {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
}

export interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>,
    Required<Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>>,
    LabelVariants {}

export function Label({ size = 'medium', color = '#000', bgColor = '#FFF', className, htmlFor, ...rest }: LabelProps) {
  return (
    <label
      style={{ color, backgroundColor: bgColor }}
      className={clsxMerge(labelVariants({ size }), className)}
      htmlFor={htmlFor}
      {...rest}
    />
  );
}

Label.displayName = 'Label';
