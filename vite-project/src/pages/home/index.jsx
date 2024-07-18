import { useState, useEffect } from 'react';
import Card from "../../components/card"
function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(data => setItems(data))
     .catch(error => console.error('Error:', error));
  },[])
  return (
    <>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {items?.map(item => ( <Card key={item.id} data={item} /> ))}
      </div>
    </>
  )
}
   
export default Home