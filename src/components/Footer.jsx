const Footer = () => {
    return (
      <footer className="bg-black text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 <span className="text-red-600 font-bold">MovieApp</span>. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-red-600">Facebook</a>
            <a href="#" className="hover:text-red-600">Twitter</a>
            <a href="#" className="hover:text-red-600">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  