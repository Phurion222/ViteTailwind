import { useContext } from 'react';
import { ShoppingCarContext } from '../../context'
import Card from "../../components/card";
import ProductDetail from '../../components/productDetail';

function Home() {
  
  const context = useContext(ShoppingCarContext);

  const renderView = () => {
    if(context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map(item => ( <Card key={item.id} data={item} /> ))
        )
    }else {
      return (
        <div>We don't have anithing :(</div>
      )
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-80 mb-4 relative'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input placeholder='Search product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' onChange={(e) => context.setSearchItem(e.target.value)}/>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}
   
export default Home