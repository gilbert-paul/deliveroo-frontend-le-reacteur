import ArticleMenu from "./ArticleMenu";
import Bucket from "./Bucket";

const Menus = ({ restaurant }) => {
  return (
    <>
      <section className="__presentation">
        <div>
          <h2>{restaurant.restaurant.name}</h2>
          <p>{restaurant.restaurant.description || restaurant.metatags.description}</p>
        </div>
        <div>
          <img
            src={restaurant.restaurant.picture || restaurant.metatags.image}
            alt="Main picture from the restaurant"
          />
        </div>
      </section>
      <section className="__menuList">
        <div className="allMenus">
        {restaurant.categories.map((articleMenu) => {
          return (
            <div key={articleMenu.name} >
          <ArticleMenu articleMenu={articleMenu} />
          
            </div>
          )
          })}
        </div>
        <Bucket/>
      </section>
    </>
  );
};

export default Menus;
