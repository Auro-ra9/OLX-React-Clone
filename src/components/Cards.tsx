
type CardType={
  name:string,
  // 
  description:string,
  price:number
  image:string
}

const  Cards = ({name,description,image,price}:CardType) => {
  return (
    <div className='flex flex-col gap-2 border rounded-md w-60'>
      <div className='mx-auto h-36 w-60 overflow-hidden'>
        <img src={image} alt="" className='h-36 w-60 object-cover' />
      </div>
      <div >
        <h1>&#8377;{price}</h1>
        <p className='truncate'>
          {name}
          {description}
        </p>
      </div>
    </div>
  )
}

export default Cards