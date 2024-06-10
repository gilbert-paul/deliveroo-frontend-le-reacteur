import ArticleMenu from "./ArticleMenu";
import Bucket from "./Bucket";

const Menus = ({ restaurant }) => {
  return (
    <>
      <section className="__presentation">
        <div>
          <h2>{restaurant.restaurant.name || restaurant.meta.metatags.title}</h2>
          <p>{restaurant.restaurant.description || restaurant.meta.metatags.description}</p>
        </div>
        <div>
          <img
            src={restaurant.restaurant.picture || restaurant.meta.metatags.image}
            alt="Main picture from the restaurant"
          />
        </div>
      </section>
      <section className="__menuList">
        <div className="allMenus">
        {restaurant.layoutNavigation.map((category) => {
          console.log(category)
          return (
            <div key={category.label} >
          <ArticleMenu articleMenu={restaurant.items} category={category.layoutId}/>
          
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
