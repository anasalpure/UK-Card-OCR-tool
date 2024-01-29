import { FieldsType } from "@/types";
import { getFieldsFromText } from "@/utils";
import { useState } from "react";
import { createWorker } from "tesseract.js";

export const useCardReader = () => {
  const [fields, setFields] = useState<FieldsType>();
  const [isLoading, setIsLoading] = useState(false);
  const startReading = async (imageLink: string) => {
    setFields({});
    setIsLoading(true);
    const worker = await createWorker("eng", 1, {
      logger: (m) => console.log(m),
    });

    const {
      data: { lines },
    } = await worker.recognize(
      imageLink,
      { rotateAuto: true },
      { imageColor: true, imageGrey: true, imageBinary: true }
    );
    // console.log(lines);
    await worker.terminate();
    setFields(getFieldsFromText(lines));
    setIsLoading(false);
  };

  return { fields, isLoading, startReading };
};
