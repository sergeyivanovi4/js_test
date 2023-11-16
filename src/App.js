import logo from './logo.svg';
import './App.css';

const HeaderLink = ({children="itemX", href="#"}) =>
    <li><a href={href}>{children}</a></li>

const Card = ({title='NoName', src="./img/images.jpg", children="Lorem"}) => 
    <div class="go1">
        <img src={src} class="a-level"/>
        <h1>{title}</h1>
        <p>{children}</p>
        <button class="btn">go</button>
    </div>

const Subheader = ({children="subheader_text", title="work"}) =>
    <>
    <article class="lorem">{children}</article>
    <div class="our-work">{title}</div>
    </>

const Aside1 = ({children="text1"}) =>
    <aside class="aside1">{children}</aside>

const Aside2 = ({children="text2"}) =>
    <aside class="aside2">{children}</aside>

const Podval = ({children="footer"}) =>
    <footer class="footer">
            <span>{children}</span>
    </footer>

function App() {
  return (

      <section class="container">
        <header class="header">
            <img src="./img/a8de11ecc3b62985e69d918c7754720a.png" alt="label"/>
            <ol style={{cssText: "list-style: none;"}} class="item">
                {/* <li><a href="#">item_1</a></li>
                <li><a href="#">item_2</a></li>
                <li><a href="#">item_3</a></li>
                <li><a href="#">item_4</a></li>
                <li><a href="#">item_5</a></li> */}
                <HeaderLink>item_1</HeaderLink>
                <HeaderLink>item_2</HeaderLink>
                <HeaderLink>item_3</HeaderLink>
                <HeaderLink>item_4</HeaderLink>
                <HeaderLink>item_5</HeaderLink>
               
            </ol>
        </header>
        <section class="content">
            <main class="main">
                <Subheader title="our work">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laboriosam eligendi quis commodi repudiandae hic suscipit dolorum, voluptatibus pariatur eos dicta quas amet eius nemo, optio iure recusandae fugiat unde.</Subheader>

                {/* <article class="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laboriosam eligendi quis commodi repudiandae hic suscipit dolorum, voluptatibus pariatur eos dicta quas amet eius nemo, optio iure recusandae fugiat unde.</article>
                <div class="our-work">our work</div> */}

                <div class="go">
                    <Card title="Lorem ipsum dolor sit amet.">Lorem 1</Card>
                    <Card title="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." src="./img/pngwing.com.png">Lorem 2</Card>
                    <Card title="Lorem ipsum dolor sit amet.">Lorem 3</Card>
                    <Card title="Lorem 4">Lorem 4</Card>
                    <Card title="Lorem 5">Lorem 5</Card>
                    <Card title="Lorem ipsum dolor sit amet." src="./img/pngwing.com.png">Lorem 6</Card>


                    {/* <div class="go1">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia quibusdam velit natus exercitationem vero, rem quae doloremque, ipsa consequuntur sunt. Nesciunt quis perspiciatis inventore corrupti illum quas ad ratione? Nesciunt quis perspiciatis inventore corrupti illum quas ad ratione?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia quibusdam velit natus exercitationem vero, rem quae doloremque, ipsa consequuntur sunt....</p>
                        <button class="btn">go</button>
                    </div>
                    <div class="go2">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button class="btn">go</button>
                    </div>
                    <div class="go3">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia quibusdam velit natus exercitationem vero, rem quae doloremque, ipsa consequuntur sunt.</p>
                        <button class="btn">go</button>
                    </div>
                    <div class="go4">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
                        <button class="btn">go</button>
                    </div>
                    <div class="go5">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia quibusdam velit natus exercitationem vero, rem quae doloremque, ipsa consequuntur sunt.</p>
                        <button class="btn">go</button>
                    </div>
                    <div class="go6">
                        <img src="./img/images.jpg" alt="A-level" class="a-level"/>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia quibusdam velit natus exercitationem vero, rem quae doloremque, ipsa consequuntur sunt.</p>
                        <button class="btn">go</button>
                    </div> */}
                </div>
            </main>

            {/* <aside class="aside1">aside 1</aside>
            <aside class="aside2">aside 2</aside> */}

            <Aside1/>
            <Aside2>No aside 2</Aside2>
        </section>
        <Podval/>

        {/* <footer class="footer">
            <span>footer</span>
        </footer> */}
    </section>
  );
}

export default App;
