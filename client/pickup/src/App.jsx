

import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../components/header'
// import Footer from './components/footer.jsx'
import './index.css'

function App() {

  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(null);

  //โหลด UI ก่อนแล้วค่อยดึงข้อมูล ทำให้การทำงานของระบบเร็วขึ้น
  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stock")
        setStock(response.data);
        setFailed(null);
      } catch (error) {
        console.error("loading error : ", error);
        setFailed("loading failed please try again later");
      } finally {
        setLoading(false);
      }
    }
    fetchStock();
  }, []) // []) คือต้องการให้โหลดครั้งเดียวตอนเริ่ม

  if (loading) {
    return <p>Loading...</p>
  }

  if (failed) {
    return <p>{failed}</p>
  }

  return (
    <>
      <Header />

      <main className='p-6 bg-gray-100 min-h-screen'>

        <h1 className="text-2xl font-bold mb-6 text-gray-600">Stock List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stock.map((stock) => (

            <div key={stock.Stock_id} className="bg-white rounded-2xl shadow-md p-5 bordor-gray-200 hover:shadow-lg transition" >
              <div><img src="#" /></div>
              <h2 className="text-xl font-bold text-gray-500">{stock.Stock_name}</h2>
              <p><span className="font-semibold">ราคา : </span>{stock.price}</p>
              <p><span className="font-semibold">จำนวน : </span>{stock.quantity}</p>
              <p><span className="font-semibold">ผู้ผลิต : </span>{stock.Constructor}</p>
              <p><span className="font-semibold">วันที่สร้าง : </span>{stock.Create_At}</p>
            </div>
          ))}
        </div>

      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
