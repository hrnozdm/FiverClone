import React,{useState} from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const navigate=useNavigate();
  
  const handleClick= async ()=>{
     
      try {
           
      if (username && password){
            const response=await api.post('/auth/login',{username: username,password:password});
            localStorage.setItem("currentUser",JSON.stringify(response.data));
            if (response.data){
              navigate('/');
            }
      }

      else{
         setErr('Lütfen Tüm alanları doldurunuz');

      }

         
      } catch (error) {
        if (error.response.status === 401) {
          setErr('Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin.');
        }
        
      }

  }


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="login border p-8 bg-white rounded-lg shadow-md min-w-96">

        <h2 className="text-2xl font-bold mb-6 px-60">Giriş Yap</h2>

        
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium text-gray-600">
            Kullanıcı Adı:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Kullanıcı Adı"
            className="mt-1 py-3 px-3 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e)=>setuserName(e.target.value)}
          />
        </div>

        <div className="mb-6 pt-3">
          <label htmlFor="password" className="block text-lg font-medium text-gray-600">
            Şifre:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Şifre"
            className="mt-1 py-3 px-3 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {err && <p className="text-red-500 mb-4">{err}</p>}

        <button
          className="w-full bg-green-500 text-white py-3 px-3 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-blue mt-3"
          onClick={handleClick}
        >
          Giriş Yap
        </button>
        

      
      </div>
    </div>
  );
};

export default Login;
