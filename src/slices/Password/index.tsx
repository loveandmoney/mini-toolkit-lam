import React, { useEffect, useState } from "react";
import { SliceConfig, TextInput } from "~components";
import { useApp } from "~hooks";
import cn from "classnames";
import * as styles from "./styles.module.scss";

interface IProps {
  data: {
    password: string;
  };
}

const Password = ({ data: { password } }: IProps) => {
  const [input, setInput] = useState(``);
  const [hasError, setHasError] = useState(false);

  const { setPagePasswordStatus, pathname } = useApp();

  const handleSubmit = () => {
    if (input === password) {
      setPagePasswordStatus((prev) => ({
        ...prev,
        [pathname]: `unlocked`
      }));
      return;
    }
    setHasError(true);
  };

  useEffect(() => {
    setHasError(false);
  }, [input]);

  return (
    <section>
      <SliceConfig
        config={{
          textColor: {
            hex: `var(--color-oakwrights-blue)`
          },
          slicePadding: {
            paddingTop: `none`
          }
        }}
      >
        <p className={cn(`b1`, styles.description)}>
          The rest of this page is password protected
        </p>

        <TextInput
          className={styles.input}
          placeholder="Enter password..."
          password
          value={input}
          onChange={setInput}
          hasError={hasError}
          onClick={handleSubmit}
          onEnter={handleSubmit}
          warningMessage="Incorrect password"
        />
      </SliceConfig>
    </section>
  );
};

export default Password;
