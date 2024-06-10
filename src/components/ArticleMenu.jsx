const ArticleMenu = ({articleMenu, category})=>{
  return(
    <article>
    <h2>{articleMenu.name}</h2>
    <div className="__lunchs">

    {articleMenu?articleMenu.map(lunch=>{
      if(lunch.categoryID === category){

        return <div className="__lunch" key={lunch.id}>
      <div >
      <h3>{lunch.name}.</h3>
      <p>{lunch.description ? lunch.description.split("").splice(0,60).join("")+ " ..." : ""}</p>
      <div className="__labels">
        <span>{lunch.price.formatted}</span><span>{lunch.popular? "★ Populaire":""}</span>
      </div>
      </div>
      {lunch.image.url?
      <img src={lunch.image.url} alt="" />
    :<></>}
    </div>
      }
    }):""}
  
  </div>
    </article>
  )
}

export default ArticleMenu