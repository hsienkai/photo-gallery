import React from 'react';
import PhotoGallery from './PhotoGallery';
import './App.css';

function App() {
  let images = [
    {url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350", caption: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."},
    {url: "https://images.dog.ceo/breeds/hound-basset/n02088238_10358.jpg", caption: "Be yourself; everyone else is already taken."},
    {url: "https://images.dog.ceo/breeds/hound-basset/n02088238_6812.jpg", caption: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
    {url: "https://images.dog.ceo/breeds/hound-blood/n02088466_12388.jpg", caption: "So many books, so little time."},
    {url: "https://images.dog.ceo/breeds/hound-english/n02089973_1799.jpg", caption: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
    {url: "https://images.dog.ceo/breeds/hound-english/n02089973_2756.jpg", caption: "A room without books is like a body without a soul."},
    {url: "https://images.dog.ceo/breeds/hound-ibizan/n02091244_3552.jpg", caption: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."}
  ];
  return (
    <div>
      <PhotoGallery images={images}/>
    </div>
  );
}

export default App;
