function Header() {
    return (
      <header className="bg-black p-5 flex justify-between items-center text-white shadow-md">
        <div className="text-3xl font-semibold">LocalVibez</div>
        <div className="space-x-5">
          <button className="bg-white text-black font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-50 transition-colors duration-200">
            Download App
          </button>
        </div>
      </header>
    );
  }
  
  export default Header;
  