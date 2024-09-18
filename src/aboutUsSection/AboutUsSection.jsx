// -- STYLE
import './aboutUsSection.css'

// -- MOCK IMAGE ARRAY
const mockImagesArr = [
    {
        img: 'https://themewagon.github.io/restoran/img/about-1.jpg'
    },
    {
        img: 'https://themewagon.github.io/restoran/img/about-2.jpg'
    },
    {
        img: 'https://themewagon.github.io/restoran/img/about-3.jpg'
    },
    {
        img: 'https://themewagon.github.io/restoran/img/about-4.jpg'
    }
]

export default function AboutUsSection(){

    const renderImagesArr = () =>{
       return mockImagesArr.map((item, key) =>{
            return(
                <div className='aboutUsImage' key={key}>
                    <img src={item.img}/>
                </div>
            )
        })
    }

    return(
        <div className='aboutUsContainer'>
            <div className='leftAboutUs'>
                {renderImagesArr()}
            </div>
            <div className='rightAboutUs'>
                <div className='aboutUsStats'>
                    <div>
                        <p>About Us</p>
                        <h2>Welcome to Restoran</h2>
                    </div> 
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur accusamus dolores possimus nemo, labore voluptatum animi excepturi reiciendis perferendis obcaecati.</p>    
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur accusamus dolores possimus nemo, labore voluptatum animi excepturi reiciendis perferendis obcaecati.</p>    
                    </div> 
                    <div>
                        <div className='dynamicStatsAboutUs'>
                            <div className='experienceAboutUs'>
                                <h1>15</h1>
                                <div>
                                    <p>Years of</p>
                                    <p>EXPERIENCE</p>
                                </div>
                            </div>
                            <div className='chefsAboutUs'>
                                <h1>50</h1>
                                <div>
                                    <p>Popular</p>
                                    <p>MASTER CHEFS</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='readMoreBtn'>READ MORE</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}