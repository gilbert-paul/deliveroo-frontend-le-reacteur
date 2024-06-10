import ArticleMenu from "./ArticleMenu";
import Bucket from "./Bucket";

const Menus = ({ restaurant }) => {
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
            <div key={category.label} >
          <ArticleMenu articleMenu={restaurant.items} category={category}/>
          
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
