import { useEffect, useState } from "react";

const Bucket = ({ articlesArray, setArticlesArray, empty, seeBucket, setSeeBucket }) => {
  let bucketArticle = false;
  const allArticles = [];
  const articlesID = [];
  let numberOfArticles = 0
  let total = 0;
  let livraison = 2.5;
  for (let i = 0; i < articlesArray.length; i++) {
    if (articlesID.includes(articlesArray[i].id)) {
      allArticles[articlesID.indexOf(articlesArray[i].id)].number += 1;
      allArticles[articlesID.indexOf(articlesArray[i].id)].subtotal +=
        articlesArray[i].subtotal / articlesArray[i].number;

      setArticlesArray(allArticles);
    } else if (!articlesArray[i].number) {
      const indexToDelete = articlesID.indexOf(articlesArray[i].number);
      allArticles.splice(indexToDelete, 0);
      setArticlesArray(allArticles);
    } else {
      articlesID.push(articlesArray[i].id);
      allArticles.push({
        name: articlesArray[i].name,
        price: articlesArray[i].price,
        id: articlesArray[i].id,
        number: articlesArray[i].number,
        subtotal: articlesArray[i].subtotal,
      });
    }
    if (articlesArray[i].subtotal) {
      total = total + articlesArray[i].subtotal;
    }
    numberOfArticles += articlesArray[i].number
  }
  return (
    <aside>
      <div className={seeBucket && !empty? "__bucket" : "__bucket __empty"}>
        <button>Valider mon panier</button>
        {articlesArray.length > 0
          ? (bucketArticle = true)
          : (bucketArticle = false)}
          {seeBucket?<div className="mobile">
            <i onClick={()=>{setSeeBucket(!seeBucket)}}className="fa-regular fa-circle-xmark mobile"></i>
            </div>
            :<></>}
        {bucketArticle
          ? articlesArray.map((thisArticle) => {
              if (thisArticle.number > 0) {
                return (
                  <div className="__article" key={thisArticle.id}>
                    <div className="__numbers">
                      <i
                        onClick={() => {
                          setArticlesArray(
                            [...articlesArray],
                            (thisArticle.number = thisArticle.number - 1),
                            (thisArticle.subtotal -=
                              thisArticle.subtotal / (thisArticle.number + 1))
                          );
                        }}
                        className="fa-regular fa-square-minus"
                      ></i>
                      <p>{thisArticle.number}</p>
                      <i
                        onClick={() => {
                          setArticlesArray(
                            [...articlesArray],
                            (thisArticle.number = thisArticle.number + 1),
                            (thisArticle.subtotal +=
                              thisArticle.subtotal / (thisArticle.number - 1))
                          );
                        }}
                        className="fa-regular fa-square-plus"
                      ></i>
                    </div>
                    <p>{thisArticle.name}</p>
                    <p>{thisArticle.subtotal / 100} €</p>
                  </div>
                );
              }
            })
          : ""}
          {!empty?

        <div className={!empty ? "__result" : "__hide"}>
          <hr />
          <div className="__total">
            <div className="__sousTotal">
              <p>Sous-total</p>
              <p>{total / 100} €</p>
            </div>
            <div className="__livraison">
              <p>Frais de livraison</p>
              <p>{livraison} €</p>
            </div>
          </div>
          <hr />
          <div className="__total">
            <div className="__sumTotal">
              <p>Total</p>
              <p>{total / 100 + livraison} €</p>
            </div>
          </div>
        </div>
:<div><p>Votre panier est vide</p></div>
        }
      </div>
{empty?
 <div className="__seeMore __empty">
 <button>{"Voir mon Panier"}</button>
</div>
:

      <div className={!seeBucket?"__seeMore":"__seeMore __hide"}>
        <button onClick={()=>{
          setSeeBucket(!seeBucket)
        }}>{!seeBucket?`Voir mon Panier - ${numberOfArticles}`:"Cacher mon Panier"}</button>
      </div>
}

    </aside>
  );
};

export default Bucket;
