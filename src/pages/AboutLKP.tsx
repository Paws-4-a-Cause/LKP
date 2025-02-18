import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AboutLKP = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-4">About Love Kuching Project</h1>
      <p className="text-lg text-center max-w-3xl mb-4">
        Love Kuching Project is a cat rescue group that started in 2009 from our founder’s own residence! Today, we
        have our own shelter space and continue to be entirely volunteer-run. We specialise in palliative care for
        older cats, medical care for chronically ill or injured cats, as well as neonatal care for young kittens.
      </p>
      <p className="text-md text-center max-w-3xl text-gray-700">
        Love Kuching Project is registered under Registry of Societies, UEN number T13SS0220G.
      </p>
      <Link to="/" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
  };
  
  export default AboutLKP;