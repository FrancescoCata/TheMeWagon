// -- STYLE
import './jumbotron.css'

export default function Jumbotron(props){
    return(
        <div className='jumboContainer'>
            <div className='jumboContent'>
                <div className='leftJumbo'>
                    <h1>Enjoy Our Delicious Meal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores qui dignissimos quod officia deserunt. Sequi, quasi explicabo aspernatur harum tempore, quidem quia doloremque placeat temporibus maiores numquam deserunt quos aliquid incidunt unde perspiciatis fuga! Voluptatum laborum, libero tempora, rem exercitationem mollitia distinctio iusto impedit, repellendus facere ad quam magni!</p>
                    <button>BOOK A TABLE</button>
                </div>
                <div className='jumboImg'>
                    <img src='https://themewagon.github.io/restoran/img/hero.png'/>
                </div>
            </div>
        </div>
    )
}