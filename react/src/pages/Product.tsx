import { IProduct } from "../types/product"
import '../App.css'


const ProductPage = (props) => { // nhận props từ App.tsx

    const removeProduct = (id) => { // hàm xử lý sự kiện khi click vào nút remove
        props.onRemove(id) // gọi hàm onRemove từ props truyền vào
    }
    return (
        <div className="max-w-5xl mx-auto">
            <div className='grid md:grid-cols-3 gap-16 '>
                {props.products.map((item: IProduct) => {
                    return (

                        <div className="py-4" key={item.id}>
                            <a href="http://"> <img  src={item.image} alt="" className="max-w-auto" /></a>
                            <div className="justify-between flex py-2">
                                <div className="  text-red-500 font-medium">{item.name}</div>
                                <div className="">color</div>
                            </div>
                            <div className="">
                                <div className="">{item.price}</div>

                            </div>
                        </div>

                    )
                })

                }
            </div>
        </div>
        // <div>
        //     {props.products.map((item) => {
        //         return <div key={item.id}>
        //             <h2>{item.name}</h2>

        //         </div>

        //     })}
        // </div>
    )
}

export default ProductPage