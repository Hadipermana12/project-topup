import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { data } from "autoprefixer";



const DiamonPriceList = () => {
  const [jumlah, setJumlah] = useState(1);
  const [hargaPerDiamond, setHargaPerDiamond] = useState(0); // Harga per diamond
  const [totalHarga, setTotalHarga] = useState(hargaPerDiamond);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [PerDiamond, setPerDiamond] =useState(0)
  const [totalDiamond, setTotalDiamond]= useState(PerDiamond)
  
    // Mendefinisikan state untuk ID dan Server
    const [id, setId] = useState(""); // ID akun ML
    const [server, setServer] = useState(""); // Server akun ML
    


  

  const tambahJumlah = () => {
    const newJumlah = jumlah + 1;
    setJumlah(newJumlah);
    setTotalHarga(newJumlah * hargaPerDiamond);

  };

  const kurangJumlah = () => {
    if (jumlah > 1) {
      const newJumlah = jumlah - 1;
      setJumlah(newJumlah);
      setTotalHarga(newJumlah * hargaPerDiamond);
      
    }
  };
  const diamonds = [
    { name: "5 (5+0)", price: 1478 },
    { name: "10 (9+1) Diamonds", price: 2995 },
    { name: "12 (11+1) Diamonds", price: 3446 },
    { name: "14 (13+1) Diamonds", price: 3993 },
    { name: "15 (15+0) Diamonds", price: 4432 },
    { name: "17 (16+1) Diamonds", price: 4923 },
    { name: "18 (17+1) Diamonds", price: 4991 },
    { name: "20 (18+2) Diamonds", price: 5989 },
    { name: "25 (20+5) Diamonds", price: 7499 },
    { name: "30 (25+5) Diamonds", price: 8999 },
    { name: "40 (35+5) Diamonds", price: 11999 },
    { name: "50 (45+5) Diamonds", price: 14999 },
    { name: "75 (70+5) Diamonds", price: 22499 },
    { name: "100 (95+5) Diamonds", price: 29999 },
    { name: "150 (145+5) Diamonds", price: 44999 },
    { name: "200 (195+5) Diamonds", price: 59999 },
  ];

  
  

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40" alt="Logo" className="mr-4" />
          <input
            type="text"
            placeholder="Cari Game atau Voucher"
            className="bg-gray-800 text-white p-2 rounded w-80"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">Masuk</button>
          <button className="text-white">Daftar</button>
          <img src="https://placehold.co/40x40" alt="Flag" className="w-8 h-8" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 p-2 flex space-x-4">
        <a href="#" className="text-yellow-400">Topup</a>
        <a href="#" className="text-white">Cek Transaksi</a>
        <a href="#" className="text-white">Leaderboard</a>
        <a href="#" className="text-white">Artikel</a>
        <a href="#" className="text-white">Gift Skin</a>
        <a href="#" className="text-white">Kalkulator</a>
      </nav>

      
      {/* Main Content */}
      <main className="flex flex-1">
        
        {/* Left Content */}
        <div className="bg-gray-700 p-4 w-3/4">
          
        {/* Header Section */}
        
     
        {/* Header */}
        <div className="flex items-center bg-blue-700 text-white rounded-t-lg">
          <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            1
          </div>
          <div className="ml-2 font-semibold">Masukkan Data Akun</div>
        </div>

        {/* Form Section */}
        <div className="bg-slate-950 p-4 rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input ID */}
            <div>
              <label className="block text-sm font-medium mb-1">ID</label>
              <input
                type="text"
                placeholder="Ketikkan ID"
                className="w-full p-2 rounded bg-gray-600 text-white"
                value={id}
                onChange={(e) => setId(e.target.value)} // Update state ID
              />
            </div>

            {/* Input Server */}
            <div>
              <label className="block text-sm font-medium mb-1">Server</label>
              <input
                type="text"
                placeholder="Ketikkan Server"
                className="w-full p-2 rounded bg-gray-600 text-white"
                value={server}
                onChange={(e) => setServer(e.target.value)} // Update state Server
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="saveInfo" className="ml-2 text-sm">
              Save Informasi Untuk Pembelian Berikut Nya
            </label>
          </div>
        </div>

      
      
        
        <div className="flex items-center bg-blue-700 text-white rounded-t-lg mt-5">
          <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            1
          </div>
          <div className="ml-2 font-semibold">Pilih Nominal</div>
        </div>
        <h2 className="text-blue-600 mb-1 mt-3">Diamonds</h2>
          <div className="grid grid-cols-3 gap-4 ">
            {diamonds.map((item, index) => (


              
              <div
              
              key={index}
              className={`bg-slate-900 p-4 rounded cursor-pointer hover:bg-slate-950 transition ${
                selectedDiamond === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => {
                setSelectedDiamond(index);
                setHargaPerDiamond(item.price || 0);
                setPerDiamond(item.name || 0)
                setTotalHarga(jumlah * (item.price || 0));
                setTotalDiamond(jumlah * (item.name || 0))
                setTotalDiamond(item.name)
              }}
            >
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-blue-700 font-semibold">
                {item.price === 0 ? "Rp 0" : `Rp ${item.price.toLocaleString()}`}
              </p>
            </div>
            
            
            
            
            ))}
            
          </div>
         

        </div>

        {/* Right Sidebar */}
        
        <div className="w-full rounded-md max-w-md mx-auto borderw-1/3 bg-gray-800 text-white p-4 overflow-y-auto h-screen ">
          
          <div className="border border-black rounded p-6">
          <div className="my-5">
          <h2 className="text-lg font-bold mb-4 my-32">Masukkan Jumlah Pembelian</h2>
          <div className="flex items-center space-x-4 mt-3">
            <button
              onClick={kurangJumlah}
              className="px-4 py-2 bg-blue-700 text-black rounded-md hover:bg-blue-400"
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={jumlah}
              className="w-12 text-center bg-gray-700 text-white rounded-md"
            />
            <button
              onClick={tambahJumlah}
              className="px-4 py-2 bg-blue-700 text-black rounded-md hover:bg-blue-400"
            >
              +
            </button>
            </div>
          </div>
              <img src="../image/logomlbb.webp" alt="Mobile Legends Logo" className="h-35 w-35 mt-0" />

          <div className="">
          <div className="mt-6">
            <h3 className="text-lg font-bold">Diamond Total</h3>
            <p className="text-2xl font-semibold mt-2">
             {totalDiamond.toLocaleString()}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold">Harga Total</h3>
            <p className="text-2xl font-semibold mt-2">
              Rp {totalHarga.toLocaleString()}
            </p>
          </div>

          <button
            
            className="mt-6 w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600"
            onClick={() =>
              
              alert(
                
                `Pesanan dibuat dengan total harga Rp ${totalHarga.toLocaleString()}`
              )
            }
          >
            Pesan Sekarang!
          </button>
          </div>
          </div>
        </div>
      </main>
    </div>
  );

  
};

export default DiamonPriceList;
