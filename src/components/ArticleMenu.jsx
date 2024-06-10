const ArticleMenu = ({articleMenu})=>{
  return(
    <article>
    <h2>{articleMenu.name}</h2>
    <div className="__lunchs">

    {articleMenu.meals?articleMenu.meals.map(lunch=>{
      return <div className="__lunch" key={lunch.title}>
      <div >
      <h3>{lunch.title}.</h3>
      <p>{lunch.description ? lunch.description.split("").splice(0,60).join("")+ " ..." : ""}</p>
      <div className="__labels">
        <span>{lunch.price} €</span><span>{lunch.popular? "★ Populaire":""}</span>
      </div>
      </div>
      {lunch.picture?
      <img src={lunch.picture} alt="" />
      :<></>}
    </div>
    }):""}
  </div>
    </article>
  )
}

export default ArticleMenu