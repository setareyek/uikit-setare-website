import { clsxMerge } from '../../utils';
import React, { type ForwardedRef, forwardRef, type InputHTMLAttributes, type ReactNode, useId, useState } from 'react';
import { cva } from 'class-variance-authority';
import { Label } from '../label/Label';
import { Text } from '../text/Text';
import { ClearIcon } from '../../assets/clearIcon';
import { ErrorTextHelperIcon } from '../../assets/errot-text-helper-icon';
import { TextHelperIcon } from '../../assets/text-helper-icon';
import { ShowPassword } from '../../assets/show-password';

const inputContainerVariants = cva(
  'inline-flex flex-col items-start gap-1 transition-colors duration-300 ease-in-out',
  {
    variants: {
      error: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'stroke-slate-400 text-slate-400',
        false: '',
      },
    },
  }
);

const inputVariants = cva(
  'mb-0.5 flex-1 border-none px-0 text-sm font-medium outline-none transition-all duration-300 ease-in-out ' +
    'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400',
  {
    variants: {
      size: {
        large: 'py-2.5',
        medium: 'py-2',
      },
      error: {
        true: '',
        false: '',
      },
      startIcon: {
        true: '',
        false: '',
      },
      endIcon: {
        true: '',
        false: '',
      },
    },
  }
);

const inputLabelVariants = cva(
  'absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded transition-all duration-300 ' +
    'ltr:left-10 ltr:-translate-x-1/2 rtl:right-10 rtl:translate-x-1/2 ',
  {
    variants: {
      size: {
        large: '',
        medium: '',
      },
      focus: {
        true: 'top-0 ltr:left-10 rtl:right-10',
        false: '',
      },
      startIcon: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed text-slate-400 ',
        false: 'text-black',
      },
      inputValue: {
        true: 'top-0 ltr:left-10 rtl:right-10',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'large',
        focus: false,
        startIcon: true,
        inputValue: false,
        class: 'ltr:left-[70px] rtl:right-[70px]',
      },

      {
        size: 'medium',
        focus: false,
        startIcon: true,
        inputValue: false,
        class: 'ltr:left-[60px] rtl:right-[60px]',
      },
    ],
  }
);

export interface InputVariants {
  disabled?: boolean;
  endIcon?: boolean;
  error?: boolean;
  size?: 'medium' | 'large';
  startIcon?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<InputVariants, 'startIcon' | 'endIcon'> {
  containerClassName?: string;
  disabled?: boolean;
  clearIcon?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  endIconHandler?: () => void;
  startIconHandler?: () => void;
  helperText?: string;
  label?: string;
  placeholder?: string;
  bgColor?: string;
  textValueColor?: string;
  textLabelColor?: string;
  borderColor?: string;
  borderErrorColor?: string;
  borderFocusedColor?: string;
  fullWidth?: boolean;
  width?: string;
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      className,
      containerClassName,
      label,
      startIcon,
      endIcon,
      clearIcon = false,
      helperText,
      bgColor = '#FFF',
      textValueColor = '#242424',
      textLabelColor = '#808080',
      borderColor = '#CCCCCC',
      borderErrorColor = '#E54660',
      borderFocusedColor = '#6F59CA',
      fullWidth = false,
      width = '320px',
      onChange,
      type = 'text',
      startIconHandler,
      endIconHandler,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputId = useId();
    const helperTextId = useId();

    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [typeInput, setTypeInput] = useState(type);

    return (
      <div
        style={{ width: fullWidth ? '100%' : width }}
        className={clsxMerge(inputContainerVariants({ error, disabled }), containerClassName)}
      >
        <div
          className='relative flex w-full items-center justify-between gap-2 rounded-lg border px-3'
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{
            borderColor: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
            boxShadow: `0 0 0 1px ${error ? borderErrorColor : focus ? borderFocusedColor : 'transparent'}`,
          }}
        >
          {label && (
            <Label
              htmlFor={rest.id ?? inputId}
              size='small'
              color={textLabelColor}
              bgColor={bgColor}
              className={clsxMerge(
                inputLabelVariants({
                  disabled,
                  focus,
                  size,
                  inputValue: Boolean(inputValue),
                  startIcon: Boolean(startIcon),
                }),
                'px-1 '
              )}
            >
              {label}
            </Label>
          )}
          {startIcon && (
            <button
              onClick={() => {
                if (startIconHandler) {
                  startIconHandler();
                }
              }}
              style={{
                color: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
                stroke: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
              }}
              className={`pointer-events-none ${size === 'large' ? 'max-w-6 [&>svg]:size-6' : 'max-w-4 [&>svg]:size-4'}`}
            >
              {startIcon}
            </button>
          )}
          <div
            className={`flex flex-1 items-center justify-between
           ${typeInput === 'password' || typeInput === 'tel' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <input
              ref={ref}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) {
                  onChange(e);
                }
                setInputValue(e?.target?.value);
              }}
              type={typeInput}
              value={inputValue}
              style={{
                backgroundColor: bgColor,
                boxShadow: 'none',
                caretColor: error ? borderErrorColor : borderFocusedColor,
                color: textValueColor,
                textAlign: `${typeInput === 'password' || type === 'tel' ? 'left' : 'justify'}`,
              }}
              className={clsxMerge(
                inputVariants({ error, size, startIcon: Boolean(startIcon), endIcon: Boolean(endIcon) }),
                className
              )}
              {...rest}
              disabled={disabled}
              aria-disabled={disabled}
              aria-describedby={helperText ? helperTextId : undefined}
              id={rest.id ?? inputId}
            />
            {clearIcon && (
              <button
                onMouseEnter={() => {
                  setHover(true);
                }}
                onClick={() => {
                  if (clearIcon) {
                    setInputValue('');
                  }
                }}
                style={{
                  color: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
                  stroke: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
                }}
                className={`${size === 'large' ? 'max-h-6 max-w-6 [&>svg]:size-6' : 'max-h-4 max-w-4 [&>svg]:size-4'}`}
              >
                {clearIcon && Boolean(inputValue) && (
                  <ClearIcon
                    style={{
                      color: hover ? borderFocusedColor : borderColor,
                      stroke: hover ? borderFocusedColor : borderColor,
                      fill: hover ? borderFocusedColor : borderColor,
                    }}
                  />
                )}
              </button>
            )}
          </div>

          {type === 'password' ? (
            <button
              onClick={() => {
                if (typeInput === 'password') {
                  setTypeInput('tel');
                } else {
                  setTypeInput('password');
                }
              }}
            >
              <ShowPassword
                style={{
                  stroke: hover ? borderFocusedColor : borderColor,
                  color: hover ? borderFocusedColor : borderColor,
                  fill: hover ? borderFocusedColor : borderColor,
                  cursor: 'pointer',
                }}
              />
            </button>
          ) : (
            endIcon && (
              <button
                onClick={() => {
                  if (endIconHandler) {
                    endIconHandler();
                  }
                }}
                style={{
                  color: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
                  stroke: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
                }}
                className={`pointer-events-none ${size === 'large' ? 'max-w-6 [&>svg]:size-6' : 'max-w-4 [&>svg]:size-4'}`}
              >
                {endIcon}
              </button>
            )
          )}
        </div>
        {helperText && (
          <div className={`flex items-center gap-2`}>
            {error ? <ErrorTextHelperIcon /> : <TextHelperIcon />}
            <Text
              variant={'Description2'}
              weight={'regular'}
              id={helperTextId}
              color={error ? borderErrorColor : textLabelColor}
            >
              {helperText}
            </Text>
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
