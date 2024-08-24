import React, { type ChangeEvent, type InputHTMLAttributes, type ReactNode, useState } from 'react';
import { clsxMerge } from '../../utils';
import { Label } from '../label/Label';
import { cva } from 'class-variance-authority';

const switchContainerVariants = cva(
  `eer-disabled:cursor-not-allowed relative block cursor-pointer rounded-full border indent-96 transition-all duration-300
        after:absolute after:z-10 after:rounded-full after:border after:bg-white
        after:transition-all after:duration-300 after:content-[''] 
        peer-checked:after:translate-x-[-100%] peer-disabled:cursor-not-allowed peer-disabled:opacity-50 
         peer-disabled:after:opacity-50 peer-checked:peer-disabled:opacity-50    `,
  {
    variants: {
      size: {
        large:
          'h-[28px] w-[48px] after:left-[4px] after:top-[3px] after:size-5 peer-checked:after:left-[calc(100%-4px)] hover:after:w-6 active:after:w-6',
        medium:
          'h-[24px] w-[44px] after:left-[3px] after:top-[2px] after:size-[18px] peer-checked:after:left-[calc(100%-3px)] hover:after:w-[22px] active:after:w-[22px]',
        small:
          'h-[20px] w-[40px] after:left-[2px] after:top-[1px] after:size-4 peer-checked:after:left-[calc(100%-2px)] hover:after:w-5 active:after:w-5',
      },
    },
  }
);

const switchIconVariants = cva(
  'pointer-events-none absolute top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center overflow-hidden' +
    ' transition duration-300 peer-disabled:stroke-slate-400 ',
  {
    variants: {
      checked: {
        true: 'invisible left-3 -translate-x-1/2 stroke-white peer-checked:visible',
        false: 'right-1 stroke-blue-700 peer-checked:invisible',
      },
      size: {
        large: '',
        medium: '',
        small: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        checked: true,
        class: 'left-2.5',
      },
      {
        size: 'small',
        checked: false,
        class: 'right-0.5',
      },
    ],
  }
);

const switchTextVariants = cva(
  'pointer-events-none absolute top-1/2 -translate-y-1/2 overflow-hidden text-xs font-semibold transition duration-300 peer-disabled:text-slate-400',
  {
    variants: {
      checked: {
        true: 'invisible left-3 -translate-x-1/2 text-white peer-checked:visible',
        false: 'right-1.5 text-blue-700 peer-checked:invisible',
      },
      size: {
        large: '',
        medium: '',
        small: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        checked: true,
        class: 'left-2.5',
      },
      {
        size: 'small',
        checked: false,
        class: 'right-1.5',
      },
    ],
  }
);

export interface SwitchVariants {
  size?: 'large' | 'medium' | 'small';
}

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'type' | 'size'>,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'>>,
    SwitchVariants {
  disabled?: boolean;
  label?: ReactNode | string;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  checkedText?: string;
  uncheckedText?: string;
  bgContainerOff?: string;
  bgContainerOn?: string;
  borderContainerOff?: string;
  borderContainerOn?: string;
}

export function Switch({
  size = 'medium',
  children,
  className,
  label,
  id,
  checkedIcon,
  uncheckedIcon,
  checkedText,
  uncheckedText,
  bgContainerOff = '#EFEAFA',
  bgContainerOn = '#6F59CA',
  borderContainerOff = '#6F59CA',
  borderContainerOn = '#6F59CA',
  ...rest
}: SwitchProps) {
  const [checked, setChecked] = useState(rest.defaultChecked ?? false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    rest.onChange?.(event);
  };

  return (
    <div className='inline-flex  items-center justify-start'>
      <Label htmlFor={id} size='small' className='flex items-center gap-2'>
        <div className='relative'>
          <input
            type='checkbox'
            id={id}
            className='peer sr-only'
            {...rest}
            aria-checked={checked}
            onChange={handleChange}
          />
          <style>
            {`
            .switch-container::after {
            border-color:${borderContainerOff};
          }
          `}
          </style>
          <div
            style={{
              backgroundColor: checked ? bgContainerOn : bgContainerOff,
              borderColor: checked ? borderContainerOn : borderContainerOff,
            }}
            className={clsxMerge(switchContainerVariants({ size }), 'switch-container')}
          />

          {checkedIcon && !checkedText && (
            <div className={clsxMerge(switchIconVariants({ checked: true, size }))}>{checkedIcon}</div>
          )}

          {checkedText && !checkedIcon && (
            <div className={clsxMerge(switchTextVariants({ checked: true, size }))}>{checkedText}</div>
          )}

          {uncheckedIcon && !uncheckedText && (
            <div className={clsxMerge(switchIconVariants({ checked: false, size }))}>{uncheckedIcon}</div>
          )}

          {uncheckedText && !uncheckedIcon && (
            <div className={clsxMerge(switchTextVariants({ checked: false, size }))}>{uncheckedText}</div>
          )}
        </div>
        <span
          className={clsxMerge('ml-2 cursor-pointer whitespace-nowrap text-xs font-medium leading-none text-black', {
            'cursor-not-allowed text-slate-400': rest.disabled,
          })}
        >
          {label}
        </span>
      </Label>
    </div>
  );
}

Switch.displayName = 'Switch';
export default Switch;
