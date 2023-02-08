import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { useEffect, useState } from "react";

const apiPublications = axios.create({
  baseURL: "http://localhost:3030/publications",
});

/**
 *
 * @param {*} props Incluir userIdArray, un array de userId que se quiere ver en el feed
 * @returns
 */
export default function Feed(props) {
  //useStates
  const [publications, setPublications] = useState([]);

  const getPublications = () => {
    const options = {
      method: "POST",
      url: `http://localhost:3030/publications/byUsers`,
      headers: { "content-type": "application/json" },
      data: props.userIdArray,
    };
    apiPublications
      .request(options)
      .then((response) => {
        const responsePublications = response.data;
        setPublications(responsePublications);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //onMount
  useEffect(() => {
    getPublications();
  }, []);

  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {publications.map((p, i) => {
            return (
              <Post
                key={i}
                publication={p}
                requestingUser={{ userId: props.requestingUser.userId }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
