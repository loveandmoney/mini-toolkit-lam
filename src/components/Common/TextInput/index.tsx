import React from "react";
import cn from "classnames";
import { SVG } from "~components";
import * as styles from "./styles.module.scss";

interface IProps {
  placeholder?: string;
  id?: string;
  value?: string;
  label?: string;
  hint?: string;
  warningMessage?: string;
  hasSearchIcon?: boolean;
  hasError?: boolean;
  required?: boolean;
  disabled?: boolean;
  password?: boolean;
  onClick?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  textarea?: boolean;
  onEnter?: () => void;
  onBlur?: () => void;
}

const TextInput = ({
  placeholder,
  id,
  value,
  label,
  hint,
  warningMessage,
  hasSearchIcon,
  hasError,
  required,
  disabled,
  password,
  onClick,
  onChange,
  className,
  textarea,
  onEnter,
  onBlur
}: IProps) => {
  const MAX_LENGTH = 300;

  const handleChange:
    | (React.ChangeEventHandler<HTMLTextAreaElement> &
        React.ChangeEventHandler<HTMLInputElement>)
    | undefined = (e) => {
    if (onChange) onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!onEnter) return;
    if (e.key === `Enter`) onEnter();
  };

  const warningIconColor = `var(--color-black-40)`;

  const InputElement = textarea ? `textarea` : `input`;

  return (
    <div
      className={cn(styles.container, className, {
        [styles.error]: hasError,
        [styles.disabled]: disabled,
        [styles.hasSearch]: hasSearchIcon,
        [styles.hasArrow]: onClick
      })}
    >
      {(label || hint || required) && (
        <div className={styles.topText}>
          <div>
            {(label || required) && (
              <label className={cn(`caption`, styles.label)} htmlFor={id}>
                {required && `* `}
                {label}
              </label>
            )}
          </div>
          <div>
            {hint && <span className={cn(`caption`, styles.hint)}>{hint}</span>}
          </div>
        </div>
      )}
      <div className={styles.inputContainer}>
        {hasSearchIcon && (
          <div className={styles.iconContainer}>
            <SVG className={styles.searchIcon} svg="lookingGlass" />
          </div>
        )}
        <InputElement
          maxLength={MAX_LENGTH}
          tabIndex={disabled ? -1 : 0}
          id={id}
          className={cn(`b2`, styles.input, {
            [styles.textarea]: textarea,
            [styles.hasSearch]: hasSearchIcon,
            [styles.hasArrow]: onClick
          })}
          type={password ? `password` : `text`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
          onBlur={() => onBlur && onBlur()}
        />
        {onClick && (
          <div className={styles.buttonContainer}>
            <button
              tabIndex={disabled ? -1 : 0}
              type="submit"
              aria-label="Submit"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
              className={styles.button}
            >
              <SVG className={styles.icon} svg="arrowRight" />
            </button>
          </div>
        )}
      </div>
      {warningMessage && hasError && (
        <span className={cn(`caption`, styles.warning)}>
          <SVG
            svg="warningTriangle"
            className={styles.icon}
            style={{
              color: hasError ? `var(--color-ux-error)` : warningIconColor
            }}
          />

          {warningMessage}
        </span>
      )}
    </div>
  );
};

export default TextInput;
