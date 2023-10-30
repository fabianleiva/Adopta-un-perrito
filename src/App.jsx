import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";
function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="container">
        <MyCard
          image="../src/assets/img/dog1.jpg"
          title="Toby"
          type="Weimaraner"
          colorBadge="success"
          text="Lleno de energía y siempre listo para jugar. Darle a Toby el hogar amoroso que se merece."
        />
        <MyCard
          image="../src/assets/img/dog2.jpg"
          title="Rocky"
          type="Corgi"
          colorBadge="danger"
          text="Es juguetón, amigable y se lleva bien con niños y otros animales. Haz de Rocky parte de tu familia."
        />
        <MyCard
          image="../src/assets/img/dog3.jpg"
          title="Pelusa"
          type="Yorkipoo"
          colorBadge="warning"
          text="Un perro pequeño con un corazón gigante. Hazte amigo de Pelusa y vive un amor incondicional."
        />
        <MyCard
          image="../src/assets/img/dog4.jpg"
          title="Pancho"
          type="Jack Russell"
          colorBadge="primary"
          text="Es un compañero leal y cariñoso que adora los abrazos. Ayuda a Pancho a encontrar una familia."
        />
      </div>
      <Footer />
    </>
  );
}
export default App;
