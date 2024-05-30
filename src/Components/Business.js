import React, { useEffect } from "react";
import NewsComponents from "./NewsComponents";

export default function Business() {
  let url =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e2229fe3c5084c318023a9ca0e808d17";

  const fetchingBusinessNews = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("Problem in fetching the business news");
      });
  };

  useEffect(() => {
    fetchingBusinessNews();
  });

  return (
    <>
      <NewsComponents
        t="Top Business Headlines..."
        url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e2229fe3c5084c318023a9ca0e808d17&pageSize=9&page="
        title="- Business"
      />
    </>
  );
}
