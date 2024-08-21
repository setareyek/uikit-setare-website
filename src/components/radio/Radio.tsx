import React, { type ChangeEvent, type InputHTMLAttributes, type ReactNode, useId, useState } from 'react';
import { clsxMerge } from '../../utils';
import { Label, type LabelProps } from '../label';
import { cva } from 'class-variance-authority';

const radioVariants = cva(
  'peer cursor-pointer border-0  ring-BlueGray-04 ring-offset-[3px] transition-colors duration-300 ease-in-out ' +
    'checked:bg-none checked:ring-Purple-05 checked:disabled:bg-Purple-04 ' +
    'disabled:cursor-not-allowed disabled:bg-none disabled:text-BlueGray-03 disabled:ring-BlueGray-03 disabled:ring-offset-slate-50 checked:disabled:ring-Purple-04 ' +
    'checked:text-Purple-05 focus:ring-2 focus:ring-offset-[3px] ' +
    'hover:text-Purple-04 hover:ring-Purple-04 checked:hover:ring-Purple-05 checked:hover:disabled:ring-Purple-04',
  {
    variants: {
      size: {
        large: 'size-4 ring-2',
        medium: 'size-3 ring-[1.5px]',
        small: 'size-2.5 ring-1',
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
}

export function Radio({ size = 'medium', children, className, label, labelProps = {}, ...rest }: RadioProps) {
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
        className={clsxMerge(radioVariants({ size }), className)}
        {...rest}
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
