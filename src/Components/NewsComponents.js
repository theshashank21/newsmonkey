import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsImage from "./news.jpg";
import Heading from "./Heading";

export default function NewsComponents(props) {
  const [loading, setLoading] = useState(false);

  const handlePrev = () => {
    if (nextpage > 1) {
      setNextpage((nextpage -= 1));
    } else {
    }
  };
  let [totalArticles, setTotalArticles] = useState(0);
  let [nextpage, setNextpage] = useState(1);

  const [ndata, setNdata] = useState([]);
  let url = props.url + `${nextpage}`;

  const fetchingApiData = () => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNdata(data.articles);
        setTotalArticles(data.totalResults);
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        console.log("Problem in fetching url");
      });
  };

  useEffect(() => {
    fetchingApiData();
    document.title = `NewsMonkey ${props.title}`;
  }, [nextpage]);

  let cal = Math.ceil(totalArticles / 9);

  const handleNext = () => {
    if (nextpage >= cal) {
    } else {
      setNextpage((nextpage += 1));
    }
  };

  return (
    <>
      {!loading && <Heading title={props.t} />}
      <div className="container my-3">
        <div className="row">
          {!loading &&
            ndata.map((event, index) => {
              return (
                <div
                  className="col-md-4 d-flex justify-content-center my-3"
                  key={index}
                >
                  <NewsItem
                    title={event.title}
                    description={
                      event.description === null
                        ? "Click on the read more button to get the detail news about what or why it happened. By clicking on the Read More button, you will have the access to the detail news. Thanks!"
                        : event.description
                    }
                    img={
                      event.urlToImage === null ? newsImage : event.urlToImage
                    }
                    url={event.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {loading && (
        <div className="load">
          <div className="text-center">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <div className="button">
          <button id="p" onClick={handlePrev}>
            <span>&#8592;</span> Prev
          </button>
          <button id="n" onClick={handleNext}>
            Next<span>&#8594;</span>
          </button>
        </div>
      )}
    </>
  );
}
