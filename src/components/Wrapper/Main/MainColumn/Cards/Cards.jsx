import { CardDate } from "./CardDate/CardDate";

export default function Cards({color, cardTheme,title}) {
    return (
         <div className="cards">
              <div className="cards__item">
                <div className="cards__card card">
                  <div className="card__group">
                    <div className={cardTheme}>
                    <p className={color}>{title}</p>
                    </div>
                    <a href="#popBrowse" target="_self">
                      <div className="card__btn">
                        <div />
                        <div />
                        <div />
                      </div>
                    </a>
                  </div>
                  <div className="card__content">
                    <a href="" target="_blank">
                      <h3 className="card__title">Название задачи</h3>
                    </a>
                   <CardDate />
                  </div>
                </div>
              </div>
            </div>
    )
}
