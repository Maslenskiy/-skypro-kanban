import Cards from "./Cards/Cards";
export default function MainColumn({status,cardList}) {
    return (
            <div className="main__column column">
            <div className="column__title">
              <p>{status}</p>
            </div>
            {cardList.map((el) => (
          <Cards
          key={el.id} // 🔥 Важно: нужен уникальный `key` для каждого элемента в списке
          color={el.color}
          cardTheme={el.cardTheme}
          title={el.theme}
        />
      ))}
          </div>
    )
}
