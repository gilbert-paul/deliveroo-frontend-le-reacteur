import { useState, useEffect } from "react";
import ArticleMenu from "./ArticleMenu";
import Bucket from "./Bucket";

const Menus = ({ restaurant }) => {
  const [empty, setEmpty] = useState(false);
  const [articlesArray, setArticlesArray] = useState([]);
  const [seeBucket, setSeeBucket] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setSeeBucket(true);
      } else {
        setSeeBucket(false);
      }
    });
    if (window.innerWidth > 768) {
      setSeeBucket(true);
    } else {
      setSeeBucket(false);
    }
    setArticlesArray(articlesArray);
    if (articlesArray.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true), setSeeBucket(false);
    }
  }, [articlesArray]);

  return (
    <>
      <section className="__presentation">
        <div>
          <h2>{restaurant.meta.metatags.title}</h2>
          <p>{restaurant.meta.metatags.descriptionSocial}</p>
        </div>
        <div>
          <img
            src={restaurant.meta.metatags.image}
            alt="Main picture from the restaurant"
          />
        </div>
      </section>
      <section className="__menuList">
        <div className="allMenus">
          {restaurant.layoutNavigation.map((category) => {
            return (
              <div key={category.label}>
                <ArticleMenu
                  articlesArray={articlesArray}
                  setArticlesArray={setArticlesArray}
                  articleMenu={restaurant.items}
                  category={category}
                />
              </div>
            );
          })}
        </div>
        <Bucket
          articlesArray={articlesArray}
          setArticlesArray={setArticlesArray}
          empty={empty}
          seeBucket={seeBucket}
          setSeeBucket={setSeeBucket}
        />
      </section>
    </>
  );
};

export default Menus;
