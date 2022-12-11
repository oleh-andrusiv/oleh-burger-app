import './AppMaterials.css'

function AppMaterials () {
  return (
    <div className="App-materials">
      <div className="App-materials_blog">
        <p className="App-materials_header">Blog</p>
        <div className="App-materials_blog_items-list">
        <p className="App-materials_blog_item">Коли Україна остаточно відбере ініціативу у росіян</p>
        <p className="App-materials_blog_item">Як змінювалась світова допомога Україні за 100 днів протистояння</p>
        <p className="App-materials_blog_item">Що робити з трофеями, які здобувають українські захисники</p>
        <p className="App-materials_blog_item">Потреби ветеранів у сприянні підприємницької діяльності</p>
        </div>
      </div>
      <div className="App-materials_news">
        <p className="App-materials_header">News</p>
        <div className="App-materials_news_items-list">
        <p className="App-materials_news_item">«Виклик для США - забезпечити контрольований занепад росії»</p>
        <p className="App-materials_news_item">Запустили онлайн-курс для операторів дронів</p>
        <p className="App-materials_news_item">Придбали війську тепловізійної оптики на 3,3 млн євро</p>
        </div>
      </div>
    </div>
  );
}

export default AppMaterials