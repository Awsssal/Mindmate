import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed w-full top-0 z-50 gentle-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:scale-105 transition-transform duration-300 bg-[#d7a1e6]">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-mindmate-text-dark font-extrabold text-xl text-[#9c6f9c]">MindMate AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-mindmate-text-light hover:text-mindmate-green font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/services" className="text-mindmate-text-light hover:text-mindmate-green font-medium transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="text-mindmate-text-light hover:text-mindmate-green font-medium transition-colors duration-300">
              Contact
            </Link>
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100 therapeutic-shadow">
          <div className="px-4 py-6 space-y-4">
            <Link to="/pricing" className="block text-mindmate-text-light hover:text-mindmate-green font-medium py-2 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/services" className="block text-mindmate-text-light hover:text-mindmate-green font-medium py-2 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="block text-mindmate-text-light hover:text-mindmate-green font-medium py-2 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Start Free Now
                </Button>
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navigation;