import React from 'react';
import './LocationFilter.css';

const HorizontalCardSlider = () => {
  const cards = [
    { id: 1, title: 'DILJIT DOSANJH', description: 'Soorma means someone who does something that is impossible.', imgUrl: 'https://images.hindustantimes.com/img/2024/07/20/1600x900/Diljit_Dosanjh__1718176856978_1721442123080.jpg' },
    { id: 2, title: 'DUA LIPA', description: 'If I was not a singer, I would be a fairy princess.', imgUrl: 'https://www.instyle.com/thmb/auRupCm9Pp8zNvHOnwX0_2wFp5I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dua-Lipa-2-af136cf23baf41f184b71a4fd1dba31c.jpg' },
    { id: 3, title: 'ALAN WALKER', description: 'The best part of this crazy adventure... All of you 🙏🏻.', imgUrl: 'https://weraveyou.com/wp-content/uploads/2020/01/Alan-Walker-Press-by-Stian-Andersen-scaled.jpg' },
    { id: 4, title: 'KARAN AUJHLA', description: 'My horse is asking me to slow down', imgUrl: 'https://images.hindustantimes.com/img/2024/07/22/1600x900/Karan_Aujla_1721638547012_1721638574585.jpg' }
  ];

  return (
    <div className="card-slider-container">
      <div className="card-slider">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imgUrl} alt={card.title} className="card-img" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardSlider;
