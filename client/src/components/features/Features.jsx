import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import ReactPlayer from 'react-player'

const Features = () => {
  return (
    <div>
        <div className="featuresMain bg-green-100 mt-20 flex justify-around">
            <div className="left">
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Bütçenize Bağlı Kalın</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24} /><span>Proje İlanlarına Göz Atın</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Uzman Freelancer'ları İnceleyin</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>İş Başvurularınızı Yönetin</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Güvenli Ödeme Sistemi</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Müşteri İncelemelerini Okuyun</span></div>       
            </div>
            <div className="right flex items-center">
            <ReactPlayer url='https://www.youtube.com/watch?v=5eYPiDbx7MY' />
            </div>
        </div>


        <div className="featuresMain bg-blue-900 mt-20 flex justify-around">
            <div className="left">
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Bütçenize Bağlı Kalın</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24} /><span>Proje İlanlarına Göz Atın</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Uzman Freelancer'ları İnceleyin</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>İş Başvurularınızı Yönetin</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Güvenli Ödeme Sistemi</span></div>       
                <div className='flex items-center p-9'><AiOutlineCheckCircle size={24}/><span>Müşteri İncelemelerini Okuyun</span></div>       
            </div>
            <div className="right flex items-center">
             <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Features
