import { FC, useEffect, useState } from "react";
import { getText } from "./getText";

export const Text: FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setText(await getText());
      } catch (error) {
        setText("error");
      }
    })();
  }, []);

  return <span>{text}</span>;
};
