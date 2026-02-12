"use client";

import { Tweet as ReactTweet } from "react-tweet";

type Props = {
  id: string;
};

export default function Tweet({ id }: Props) {
  return <ReactTweet id={id} />;
}