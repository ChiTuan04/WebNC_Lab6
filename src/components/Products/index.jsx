import React from 'react'
import prd1 from "../../assets/imgs/product1.jpg"
import prd2 from "../../assets/imgs/product2.jpg"
import prd3 from "../../assets/imgs/product3.jpg"
import prd4 from "../../assets/imgs/product4.jpg"
import { Link } from 'react-router-dom'
export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1, prdName: "Tissot Le Locle Powermatic 80", price: 17500000, prdImage: prd1, description: "Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy."
    },
    {
      id: 2, prdName: "Doxa Noble D173TCM", price: 49000000, prdImage: prd2, description: "Mẫu Doxa D173TCM khoác lên phong cách đẳng cấp khi mặt số với thiết kế tinh xảo đính kèm các viên kim cương nổi bật trên nền kính Sapphire thời trang sang trọng phối cùng mẫu dây đeo demi."
    },
    {
      id: 3, prdName: "Titoni Airmaster", price: 35000000, prdImage: prd3, description: "Là dòng đồng hồ cơ Thụy Sỹ sang trọng với bộ máy SW200-1 trữ cót 38 giờ siêu bền bỉ và chính xác."
    },
    {
      id: 4, prdName: "Tissot PRX Powermatic", price: 21000000, prdImage: prd4, description: "Mặt số hình thùng kích thước 40mm đạt độ mỏng lý tưởng, trang bị máy cơ tích cót lên đến 80 giờ"
    }
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2x1 font-bold mb-5'>Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 gap-5">
        {
          products.map((product) => {
            return(
              <div key={product.id} className='bg-white shadow-md rounded-lg'>
                <img src={product.prdImage} alt={product.prdName} className='w-80 h-80 object-cover'/>             
                <h3 className='text-lg font-semibold'>{product.prdName}</h3>
                <p className='text-red-400 font-medium text-lg'>{product.price.toLocaleString()} VNĐ</p>
                <Link to={`/detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                <button onClick={() => { handleAddToCart(product) }} className='w-full block bg-green-500 text-white py-2 rounded-lg'>Thêm vào giỏ hàng</button>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
