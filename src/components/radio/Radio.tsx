import React, { type ChangeEvent, type InputHTMLAttributes, type ReactNode, useId, useState } from 'react';
import { clsxMerge } from '../../utils';
import { Label, type LabelProps } from '../label/Label';
import { cva } from 'class-variance-authority';

const radioVariants = cva(
  'peer cursor-pointer rounded-full transition-colors duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 ',
  {
    variants: {
      size: {
        large: 'size-4 outline-[1.5px] outline-offset-[2.5px] focus:outline-[1.5px] focus:outline-offset-[2.5px]',
        medium: 'size-3  outline-[1.5px] outline-offset-[2.5px] focus:outline-[1.5px] focus:outline-offset-[2.5px]',
        small: 'size-2.5 outline-1 outline-offset-2 focus:outline-1 focus:outline-offset-2',
      },
    },
  }
);

const radioContainerVariants = cva('inline-flex items-center justify-start', {
  variants: {
    size: {
      large: 'gap-3',
      medium: 'gap-3',
      small: 'gap-2',
    },
  },
});

export interface RadioVariants {
  size?: 'large' | 'medium' | 'small';
}

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type' | 'size'>,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'name'>>,
    RadioVariants {
  disabled?: boolean;
  label: ReactNode | string;
  labelProps?: Omit<LabelProps, 'htmlFor'>;
  bgColorHover?: string;
  bgColorSelected?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorSelected?: string;
}

export function Radio({
  size = 'medium',
  children,
  className,
  label,
  labelProps = {},
  bgColorHover = '#BEACEC',
  bgColorSelected = '#6F59CA',
  borderColor = '#CCCCCC',
  borderColorHover = '#BEACEC',
  borderColorSelected = '#6F59CA',
  ...rest
}: RadioProps) {
  const id = useId();
  const [checked, setChecked] = useState(rest.defaultChecked ?? false);

  const { className: labelClassName, ...labelRest } = labelProps;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    rest.onChange?.(event);
  };

  return (
    <div className={clsxMerge(radioContainerVariants({ size }), className)}>
      <input
        id={rest.id ?? id}
        type='radio'
        tabIndex={checked ? 0 : -1}
        aria-checked={checked}
        onChange={handleChange}
        style={{
          outlineStyle: 'solid',
          outlineColor: checked ? borderColorSelected : borderColor,
          boxShadow: 'none',
          border: 'none',
          backgroundImage: 'none',
        }}
        className={clsxMerge(radioVariants({ size }), className)}
        {...rest}
        onMouseEnter={e => {
          e.currentTarget.style.outlineColor = checked ? borderColorSelected : borderColorHover;
          e.currentTarget.style.backgroundColor = bgColorHover;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.outlineColor = checked ? borderColorSelected : borderColor;
          e.currentTarget.style.backgroundColor = checked ? bgColorSelected : '';
        }}
      />
      <Label
        htmlFor={rest.id ?? id}
        size='small'
        className={clsxMerge(
          'whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 hover:cursor-pointer',
          labelClassName
        )}
        {...labelRest}
      >
        {label}
      </Label>
    </div>
  );
}

Radio.displayName = 'Radio';
export default Radio;
