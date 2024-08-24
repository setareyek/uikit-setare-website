import React, {
  type ChangeEvent,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { cva } from 'class-variance-authority';
import { clsxMerge } from '../../utils';
import { Label } from '../label';

const checkboxVariants = cva(
  'peer cursor-pointer  ' +
    'transition-colors duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 ',
  {
    variants: {
      size: {
        large:
          'size-4 rounded outline-[1.5px] outline-offset-[2.5px] focus:outline-[1.5px] focus:outline-offset-[2.5px] ',
        medium:
          'size-3 rounded outline-[1.5px] outline-offset-[2.5px] focus:outline-[1.5px] focus:outline-offset-[2.5px] ',
        small: 'size-2.5 rounded-sm outline-1 outline-offset-2 focus:outline-1 focus:outline-offset-2 ',
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
  bgColorHover?: string;
  bgColorSelected?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorSelected?: string;
  radius?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      children,
      className,
      label,
      bgColorHover = '#BEACEC',
      bgColorSelected = '#6F59CA',
      borderColor = '#CCCCCC',
      borderColorHover = '#BEACEC',
      borderColorSelected = '#6F59CA',
      radius,
      ...rest
    }: CheckboxProps,
    ref
  ) => {
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
          style={{
            outlineStyle: 'solid',
            outlineColor: checked ? borderColorSelected : borderColor,
            boxShadow: 'none',
            border: 'none',
            borderRadius: radius,
          }}
          className={clsxMerge(checkboxVariants({ size }), className)}
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
