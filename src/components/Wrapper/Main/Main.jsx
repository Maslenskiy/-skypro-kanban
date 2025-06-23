import MainColumn from "./MainColumn/MainColumn";
export default function Main() {
    return (
    <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">
        <MainColumn status={'Без статуса'} color={'_orange'} cardTheme="card__theme _orange" title='Web Design'/>
        <MainColumn status={'Нужно сделать'}  color={'_green'} cardTheme="card__theme _green"  title='Research'/>
        <MainColumn status={'В работе'}  color={'_orange'} cardTheme="card__theme _orange"  title='Web Design'/>
        <MainColumn status={'Тестирование'} color={'_purplr'} cardTheme="card__theme _purple"  title='Copywriting'/>
        <MainColumn status={'Готово'}  color={'_green'} cardTheme="card__theme _green"  title='Research'/>
        </div>
      </div>
    </div>
  </main>
    )
}
