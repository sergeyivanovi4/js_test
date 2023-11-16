import logo from './logo.svg';
import './App.css';

const name="Serhii"

const Header = ({children, size='100px'}) =>
<header className="App-header">
        <img style={{minHeight:size}} src={logo} className="App-logo" alt="logo" />
        {children}
</header>

const Add = ({a,b}) => 
<div> 
  a+b={a}+{b}={a+b}
</div>

const GoodCard = ({title='NoName', url='#', img='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}) => //title, url - объявление переменных. После `=` - значение по умолчанию
<div className='GoodCard'>
    <h1>{title}</h1> 
    <a href={url}>
        <img src={img} />
    </a> { /*title, url - підстановка в HTML*/ }
</div>


const Main = () => //використання
<main> 
    <GoodCard/>
    <GoodCard title="Bosch" url='http://google.com'/>
    <GoodCard title="eBosch" url='http://google.com' img="data:image/jpeg;base64,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"/>
    <GoodCard title="Braun" />
    <GoodCard title="neBraun" />
</main>

function App() {
  return (
    <div className="App">
      <input></input>
      <div/>
      
      {/* Hello
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {2+2}<br/>
        2+2<br/>
        {name}
      </header> */}
      <Header>Hello World</Header>
      <Header size="200px">Hel</Header>

      <Add a={5} b={3}/>
      <Add a={6} b={-2}/>
      <Add a='Hel' b={100}/>

      <Main/>
      {/* <Main/>
      <Footer/> */}
    </div>
  );
}

export default App;