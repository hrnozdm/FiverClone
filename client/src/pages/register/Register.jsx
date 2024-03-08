import axios from 'axios';
import React, { useState } from 'react';
import api from "../../api/api";
import AlertPopup from "../../components/alert/Alert";

const Register = () => {



  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
    phone: '',
    desc: '',
    isSeller: false,
    img: '',
  });

  const [alert, setalert] = useState(null);

  const handleCloseAlert = () => {
    setalert(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, img: file });
  };

  const handleSubmit = async () => {

    try {
    
      if (!user.username || !user.password || !user.country || !user.desc || !user.img || !user.phone) {
        return setalert('Lütfen Tüm Alanları Doldurunuz');
      }

      const data=new FormData();
      data.append("file",user.img);
      data.append("upload_preset","fiverr");
      const imageResponse = await axios.post("https://api.cloudinary.com/v1_1/dd7bctizj/image/upload",data);
      const imageUrl=imageResponse.data.secure_url;
      const response=await api.post("/auth/register",{...user,img:imageUrl});
      //console.log(response.data);

      if (response.data){
        setalert("Kullanıcı Kaydı Başarılı")
        return response.data;
      }
     
    } catch (error) {
      console.log(error);
    }
   


  };
  
  console.log(user);

 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="register border p-8 bg-white rounded-lg shadow-md min-w-96">
        <h2 className="text-2xl font-bold mb-6">Kayıt Ol</h2>

        {/* İlk Bölüm */}
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="username" className="block text-lg font-medium text-gray-600">
              Kullanıcı Adı:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Kullanıcı Adı"
              className="mt-1  py-3 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="email" className="block text-lg font-medium text-gray-600">
              E-posta:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-posta"
              className="mt-1 py-3 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="password" className="block text-lg font-medium text-gray-600">
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifre"
              className="mt-1 py-3 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="country" className="block text-lg font-medium text-gray-600">
              Ülke:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Ülke"
              className="mt-1 py-3 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-600">
              Telefon:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telefon"
              className="mt-1 py-3 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="desc" className="block text-lg font-medium text-gray-600">
              Açıklama:
            </label>
            <textarea
              id="desc"
              name="desc"
              placeholder="Açıklama"
              className="mt-1 py-6 px-4 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
              value={user.desc}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* İkinci Bölüm */}
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="isSeller" className="text-lg font-medium text-gray-600 ml-2">
              Satıcı mısınız?
            </label>
            <input
              type="checkbox"
              id="isSeller"
              name="isSeller"
              className="mr-2"
              checked={user.isSeller}
              onChange={() => setUser({ ...user, isSeller: !user.isSeller })}
            />
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="img" className="block text-lg font-medium text-gray-600">
              Profil Resmi:
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Kayıt Ol Butonu */}
        <button
          className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue mt-3"
          onClick={handleSubmit}
        >
          Kayıt Ol
        </button>

        {alert && <AlertPopup message={alert} onClose={handleCloseAlert} />}
      </div>
    </div>
  );
};

export default Register;
