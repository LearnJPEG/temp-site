export default function CardMint({ title, linkText, list=[] }) {
  return (
    <div className="mint-card">
      <div className="mint-card__icon">
      </div>
      <h3 className="card-title"> {title} </h3>
      <ul className="list-unstyled">
        {list.map((item,index)=>{
          return(
            <li key={item+index}>{item}</li>
          )
        })}
      </ul>
      <div className="mint-card__button">
        <a href="#" className="btn btn-outline-black">{linkText}</a>
      </div>
    </div>

  )
}