import React, { useState, useRef } from 'react';
import { Rating, Avatar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Bruno Mota',
      position: 'CEO, Devoteam Portugal',
      rating: 4,
      text: 'Very easy to use. I am completely blown away, this is the real deal!',
      video: '/test.mp4',
      avatar: 'https://www.saasable.io/assets/images/testimonial/avatar-bg2.svg',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO, TechWave',
      rating: 5,
      text: 'The platform has transformed how our team collaborates on projects.',
      video: '/test.mp4',
      avatar: 'https://www.saasable.io/assets/images/testimonial/avatar-bg1.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const currentTestimonial = testimonials[currentIndex];

  const handlePlayClick = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col items-start">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          Reviews from Our Dev Community
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Discover why engineering teams love our platform.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Video/Image Section */}
          <div className="relative flex-1 rounded-lg overflow-hidden">
            {!isPlaying && (
              <img
                src={currentTestimonial.avatar}
                alt="Testimonial Avatar"
                className="w-full h-full object-cover"
              />
            )}

            <video
              ref={videoRef}
              className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
              src={currentTestimonial.video}
              onEnded={handleVideoEnded}
            />

            {/* Play Button at Bottom */}
            {!isPlaying && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop-blur-md rounded-full flex items-center px-4 py-2 shadow-lg">
                <VideocamIcon className="text-gray-700" />
                <span className="text-gray-800 ml-2 text-sm font-medium">02:00 Min</span>
                <button
                  className="ml-3 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition"
                  onClick={handlePlayClick}
                >
                  <PlayArrowIcon />
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <Rating value={currentTestimonial.rating} readOnly />
            </div>
            <p className="text-2xl text-gray-800 font-normal mb-2">
              {currentTestimonial.text}
            </p>
            <div className="flex items-center mt-8">
              <Avatar
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                sx={{ width: 48, height: 48 }}
                className="mr-4"
              />
              <div>
                <h3 className="font-medium text-lg">{currentTestimonial.name}</h3>
                <p className="text-gray-600">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>
        </div>

    
        <div className="flex justify-end w-full mt-10">
          <button
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mr-2 hover:bg-gray-100 transition-all"
            onClick={handlePrev}
          >
            <ArrowBackIcon />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all"
            onClick={handleNext}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
