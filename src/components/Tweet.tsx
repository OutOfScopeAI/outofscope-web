"use client";

import { Tweet as ReactTweet } from "react-tweet";

export default function Tweet({ id }: { id: string }) {
  return <ReactTweet id={id} />;
}
