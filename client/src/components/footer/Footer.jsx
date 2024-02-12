import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto flex justify-between">
        <div className="flex-1 mr-8">
          <h3 className="text-2xl font-bold mb-4">Fiverr.</h3>
          <p className="text-gray-400">Fiverr, dünya çapında bağımsız profesyonellerle işbirliği yapmanın en iyi yoludur.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-gray-400">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-gray-400">Kullanım Şartları</a></li>
            <li><a href="#" className="hover:text-gray-400">İletişim</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Hizmetler</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Freelancer Bul</a></li>
            <li><a href="#" className="hover:text-gray-400">Projeler</a></li>
            <li><a href="#" className="hover:text-gray-400">Fiverr Business</a></li>
            <li><a href="#" className="hover:text-gray-400">Fiverr Learn</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4">Bize Katılın</h3>
          <p className="text-gray-400">Fiverr topluluğuna katılın ve dünya genelindeki bağımsız profesyonellerle tanışın.</p>
          <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-green-600">Ücretsiz Kaydol</button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">&copy; 2024 Fiverr. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;

