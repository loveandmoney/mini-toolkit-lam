import React, { useState } from "react";
import { Button, TextInput } from "~components";
import * as styles from "./styles.module.scss";
import type {
  IBrief,
  ICustomField
} from "src/components/LabTools/BrandBriefer/types";

interface IProps {
  setBriefData: React.Dispatch<React.SetStateAction<IBrief>>;
}

const CustomInfo = ({ setBriefData }: IProps) => {
  const initialCustomInfoForm: ICustomField = {
    title: ``,
    value: ``
  };

  const [isAddingCustomField, setIsAddingCustomField] = useState(false);
  const [customInfoForm, setCustomInfoForm] = useState<ICustomField>(
    initialCustomInfoForm
  );

  const reset = () => {
    setIsAddingCustomField(false);
    setCustomInfoForm(initialCustomInfoForm);
  };

  const handleAddField = () => {
    if (!customInfoForm.title || !customInfoForm.value) {
      reset();
    }

    setBriefData((prev) => ({
      ...prev,
      customFields: [
        ...(prev.customFields || []),
        { title: customInfoForm.title, value: customInfoForm.value }
      ]
    }));
    reset();
  };

  return (
    <>
      {!isAddingCustomField && (
        <Button
          variant="secondary"
          onClick={() => setIsAddingCustomField(true)}
        >
          Add Custom Field
        </Button>
      )}

      {isAddingCustomField && (
        <div className={styles.formContainer}>
          <TextInput
            className={styles.input}
            label="Field title"
            placeholder="Field title"
            value={customInfoForm.title}
            onChange={(value) =>
              setCustomInfoForm((prev) => ({ ...prev, title: value }))
            }
          />
          <TextInput
            textarea
            className={styles.input}
            label="Content"
            placeholder="Type content here..."
            value={customInfoForm.value}
            onChange={(value) =>
              setCustomInfoForm((prev) => ({ ...prev, value }))
            }
          />
          <div className={styles.buttons}>
            <Button variant="secondary" onClick={handleAddField}>
              Add
            </Button>
            <Button variant="secondary" onClick={reset}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomInfo;
