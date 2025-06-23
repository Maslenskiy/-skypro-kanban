
import MainColumn from "./MainColumn/MainColumn";
export default function Main({cardList,status}) {
    return (
    <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
            {status.map((status) => {
              const filteredCards = cardList.filter(card => card.status === status.title);
              return (
                <MainColumn 
                  key={status.id} 
                  status={status.title} 
                  cardList={filteredCards} 
                />
              );
            })}
        </div>
      </div>
    </div>
  </main>
    )
}
