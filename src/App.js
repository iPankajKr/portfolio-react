import Main from "./components/main/Main";
import Content from "./components/content/Content";

function App() {
  window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) nav.className = 'shift-0'; else nav.className = '-shift-y-64';
  };

  return (
    <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-[1440px] md:flex-row">
      <Main />
      <Content />
    </div>
  );
}

export default App;
