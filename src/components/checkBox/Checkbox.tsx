import React from 'react';
import { cva } from 'class-variance-authority';
import {
  type ChangeEvent,
  forwardRef,
  type InputHTMLAttributes,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { clsxMerge } from '../../utils';
import { Label } from '../label';

const checkboxVariants = cva(
  'peer cursor-pointer rounded border-0 outline-0 ring-BlueGray-04 ring-offset-[3px] checked:ring-Purple-05 checked:ring-offset-[3px] focus:ring-offset-[3px] disabled:ring-BlueGray-03 ' +
    'transition-colors duration-300 ease-in-out checked:ring-Purple-05 hover:ring-Purple-04 checked:disabled:ring-Purple-04 ' +
    'checked:disabled:ring-red checked:bg-Purple-05 checked:text-Purple-05 checked:hover:bg-Purple-04 checked:disabled:bg-Purple-04 checked:disabled:hover:bg-Purple-04 ' +
    'disabled:hover:none disabled:ring-red disabled:cursor-not-allowed  disabled:hover:bg-transparent ' +
    'hover:bg-Purple-04 focus:ring-Purple-05   ',
  {
    variants: {
      size: {
        large: 'size-4 rounded ring-[1.5px] ring-offset-[3px] focus:ring-[1.5px]',
        medium: 'size-3 rounded ring-[1.5px] ring-offset-[2px] focus:ring-[1.5px]',
        small: 'size-2.5 rounded-sm ring-1 ring-offset-[2px] focus:ring-1',
      },
    },
  }
);

const checkboxContainerVariants = cva('inline-flex items-center justify-start gap-2', {
  variants: {
    size: {
      large: 'gap-3',
      medium: 'gap-2.5',
      small: 'gap-2',
    },
  },
});

export interface CheckboxVariants {
  size?: 'small' | 'medium' | 'large';
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, CheckboxVariants {
  label?: ReactNode | string;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'medium', children, className, label, ...rest }: CheckboxProps, ref) => {
    const id = useId();
    const innerRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState(rest.defaultChecked ?? false);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      rest.onChange?.(event);
    };

    return (
      <div className={clsxMerge(checkboxContainerVariants({ size }), className)}>
        <input
          id={rest.id ?? id}
          ref={innerRef}
          type='checkbox'
          aria-checked={checked}
          onChange={handleChange}
          className={clsxMerge(checkboxVariants({ size }), className)}
          {...rest}
        />
        {label && (
          <Label
            htmlFor={rest.id ?? id}
            size='small'
            className='whitespace-nowrap peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 hover:cursor-pointer'
          >
            {label}
          </Label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
