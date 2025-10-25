import './NewArrival.css'

const New=()=>{
   const obej=[
        {
            img:'https://food-mart-template.vercel.app/images/product-thumb-11.jpg',
            title:'Amber Jar',
            msg:'Honey best nector you wish to get'
        },
        {
            img:'https://food-mart-template.vercel.app/images/product-thumb-12.jpg',
            title:'Amber Jar',
            msg:'Honey best nector you wish to get'
        },
        {
            img:'https://food-mart-template.vercel.app/images/product-thumb-13.jpg',
            title:'Amber Jar',
            msg:'Honey best nector you wish to get'
        }
    ]
    
    return <>
    <h3>New Arrival</h3>
    <div className="main-cont2">
        {obej.map((values,index)=>
        <div key={index} className='cards2'>
            <img src={values.img} alt="" className='newimg' />
            <div>
                <h4 className='newh4'>{values.title}</h4>
                <p className='newp'>{values.msg}</p>
            </div>
        </div>
        )}
    </div>
    </>
    
}

export default New