import { FC, useState } from "react";
import { Question } from "../questions";

type Props = {
  data: Question[];
};

const Test: FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);

  return;
};

export default Test;
