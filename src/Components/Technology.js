import React from "react";
import NewsComponents from "./NewsComponents";

export default function Technology() {
  return (
    <>
      <NewsComponents
        t="Top Tech News..."
        url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e2229fe3c5084c318023a9ca0e808d17&pageSize=9&page="
        title="- Technology"
      />
    </>
  );
}
