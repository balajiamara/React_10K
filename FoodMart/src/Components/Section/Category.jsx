import './Category.css'

const Category=()=>{
    // const names=['a','b','c']
    // const obje=[{k:'a1',e:1},{k:'b1',e:2},{k:'c1',e:3}]
    const cards=[
        {img:'https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png',
         title:'Fruits & Veggies'
        },
        {img:'https://food-mart-template.vercel.app/images/icon-bread-baguette.png',
         title:'Breads & Sweets'
        },
        {img:'https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png',
         title:'Fruits & Veggies'
        },
        {img:'https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png',
         title:'Fruits & Veggies'
        },
        {img:'https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png',
         title:'Fruits & Veggies'
        },
        {img:'https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png',
         title:'Fruits & Veggies'
        }
    ]

    return <>
    {/* <p>hi</p> */}
    {/* {names.map((value,index)=> <p key={index}>name is {value}</p>)}
    {obje.map((value,index)=><h1 key={index}>name is {value.k}</h1>)} */}

    <h3>Category</h3>
    <div className='main-cont'>
        {cards.map((value,index)=><div key={index} className='cards'> <img src={value.img} alt={value.img}/> <h5>{value.title}</h5></div>)}
    </div>

    </>
}


export default Category