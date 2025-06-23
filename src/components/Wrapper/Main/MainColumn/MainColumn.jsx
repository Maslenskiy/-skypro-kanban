import Cards from "./Cards/Cards";

export default function MainColumn({status, color,cardTheme,title}) {
    return (
            <div className="main__column column">
            <div className="column__title">
              <p>{status}</p>
            </div>
           <Cards color={color} cardTheme={cardTheme} title={title}/>
          </div>
    )
}
