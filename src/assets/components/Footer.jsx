import React from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';
import { BsSlack } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
 
const Footer = () => {
  return (
<footer className="bg-gray-100 py-8 px-4 md:px-12 lg:px-20">

<div className="max-w-6xl mx-auto mb-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 rounded-lg p-6 shadow-sm">
<div className="text-left">
<h2 className="text-2xl font-bold text-gray-800">Join our newsletter</h2>
<p className="text-gray-600">Discover the features that will transform your customer relationships</p>
</div>
<div className="flex w-full md:w-auto">
<TextField
              placeholder="Enter your email address"
              variant="outlined"
              size="small"
              className="bg-white rounded-l-lg w-full md:w-64"
              InputProps={{
                className: "rounded-r-none"
              }}
            />
<Button 
              variant="contained" 
              className="bg-blue-600 hover:bg-blue-700 rounded-l-none rounded-r-lg"
>
<IoMdSend className="text-white" />
</Button>
</div>
</div>
</div>
 
    
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
<div className="col-span-1">
<div className="flex items-center mb-4">
<div className="text-blue-600 mr-2">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<h3 className="text-xl font-bold text-blue-600">SaasAble</h3>
</div>
<p className="text-gray-600 mb-6">Empower your HR team with our comprehensive platform for seamless HR management</p>
<div className="inline-block">
<Button 
              variant="outlined" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
>
              ENG <span className="ml-2">▼</span>
</Button>
</div>
</div>
 
    
<div className="col-span-1">
<h3 className="text-lg font-bold text-gray-800 mb-4">Use Case</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-600 hover:text-blue-600">Business Analytics</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">Marketing Automation</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">Collaboration Suites</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">Project Management</a></li>
</ul>
</div>
 

<div className="col-span-1">
<h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">Support</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">License Terms</a></li>
</ul>
</div>
 
    
<div className="col-span-1">
<h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-600 hover:text-blue-600">Why Phoenixcoded?</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
<li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
</ul>
</div>
</div>
 
      
<div className="max-w-6xl mx-auto mt-8">
<h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us on</h3>
<div className="flex space-x-3">
<IconButton className="bg-gray-100 hover:bg-gray-200 p-3">
<FaLinkedin className="text-blue-600" />
</IconButton>
<IconButton className="bg-gray-100 hover:bg-gray-200 p-3">
<FaFacebook className="text-blue-600" />
</IconButton>
<IconButton className="bg-gray-100 hover:bg-gray-200 p-3">
<FaYoutube className="text-blue-600" />
</IconButton>
<IconButton className="bg-gray-100 hover:bg-gray-200 p-3">
<FaGithub className="text-blue-600" />
</IconButton>
<IconButton className="bg-gray-100 hover:bg-gray-200 p-3">
<BsSlack className="text-blue-600" />
</IconButton>
</div>
</div>
 
    
<div className="max-w-6xl mx-auto my-8 border-t border-gray-200"></div>
 

<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
<p>Copyright © 2024 Phoenixcoded</p>
<div className="flex space-x-4 mt-2 md:mt-0">
<a href="#" className="hover:text-blue-600">Privacy Policy</a>
<a href="#" className="hover:text-blue-600">Terms & Conditions</a>
</div>
</div>
 

<div className="fixed bottom-4 right-4">
<Button
          variant="contained"
          className="bg-blue-600 hover:bg-blue-700 p-3 min-w-0 rounded-full"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
</Button>
</div>
</footer>
  );
};
 
export default Footer;