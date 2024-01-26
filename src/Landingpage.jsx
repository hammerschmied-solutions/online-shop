import store from './images/store.jpg';
import './styles/Landingpage.css';
import Navigation from './Navigation';
const Landingpage = () => {
  return (
    <>
      <Navigation isShop={false} />
      <main>
        <img src={store} alt='Store' />
        <div>Very important text</div>
      </main>
    </>
  );
};
export default Landingpage;
