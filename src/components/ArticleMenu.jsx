import React from "react";

const ArticleMenu = ({ articleMenu, category }) => {

  return (
    <article>
      <h2>{category.label}</h2>
      <div className="__lunchs">
        {articleMenu.map((lunch) => {
          if (lunch.categoryId === category.layoutId) {
            return (
              <div className="__lunch" key={lunch.id}>
                <div>
                  <h3>{lunch.name}.</h3>
                  <p>
                    {lunch.description
                      ? lunch.description.split("").splice(0, 60).join("") +
                        " ..."
                      : ""}
                  </p>
                  <div className="__labels">
                    <span>{lunch.price.formatted}</span>
                    <span>{lunch.popular ? "★ Populaire" : ""}</span>
                  </div>
                </div>
                {lunch.image? (
                  <img src={lunch.image.url} alt={lunch.image.altText} />
                ) : (
                  <></>
                )}
              </div>
            );
          }
        })}
      </div>
    </article>
  );
};

export default ArticleMenu;
