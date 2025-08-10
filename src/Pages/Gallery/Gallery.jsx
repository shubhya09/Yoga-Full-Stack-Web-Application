

import React from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

const yogaData = [
  {
    label: "Beginner Yoga Asanas",
    cards: [
      { img: "https://as1.ftcdn.net/v2/jpg/01/40/43/00/1000_F_140430069_4nHtwt33OhOPzzuo59lynCIjUSmCB2p5.jpg", name: "Tadasana", desc: "Improves posture & balance", teacher: "Instructor A", timing: "5-10 min" },
      { img: "https://t4.ftcdn.net/jpg/14/44/16/81/240_F_1444168136_lHz2sxiSuj73R38Od8UNMqs9P1neXeZM.jpg", name: "Vrikshasana", desc: "Enhances concentration", teacher: "Instructor B", timing: "3-5 min" },
      { img: "https://t3.ftcdn.net/jpg/10/40/46/08/240_F_1040460816_4EJyaMU6neEV1u2QpZ6eERtkyT5CY4XQ.jpg", name: "Bhujangasana", desc: "Strengthens spine", teacher: "Instructor C", timing: "5-7 min" },
      { img: "https://t4.ftcdn.net/jpg/02/69/85/95/240_F_269859560_3hkIFqxDr8DhXcjPNrZFVBLcuMDe2ocw.jpg", name: "Padmasana", desc: "Calms the mind", teacher: "Instructor D", timing: "10-15 min" }
    ]
  },
  {
    label: "Intermediate Yoga Asanas",
    cards: [
      { img: "https://t3.ftcdn.net/jpg/02/56/74/36/240_F_256743620_fipEJeGTDrnSbBaxpFt73BlGqxuHmGDH.jpg", name: "Trikonasana", desc: "Stretches and strengthens legs", teacher: "Instructor E", timing: "5-10 min" },
      { img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b", name: "Dhanurasana", desc: "Opens chest & shoulders", teacher: "Instructor F", timing: "5-7 min" },
      { img: "https://images.unsplash.com/photo-1588286840104-8957b019727f", name: "Ustrasana", desc: "Improves flexibility", teacher: "Instructor G", timing: "3-5 min" },
      { img: "https://t3.ftcdn.net/jpg/02/38/46/26/240_F_238462645_qIQqlvVMrSVI31DwUtUwKZ8z89cb5hNl.jpg", name: "Garudasana", desc: "Improves balance", teacher: "Instructor H", timing: "3-5 min" }
    ]
  },
  {
    label: "Advanced Yoga Asanas",
    cards: [
      { img: "https://t3.ftcdn.net/jpg/04/44/51/64/240_F_444516428_J9k1Zde58JUIEypK8iB63JJe3TQbTBma.jpg", name: "Sirsasana", desc: "Boosts brain function", teacher: "Instructor I", timing: "2-5 min" },
      { img: "https://t4.ftcdn.net/jpg/04/38/24/85/240_F_438248513_Pnn3LwCjDVKtrDYugA55c6azWuY6C2RS.jpg", name: "Mayurasana", desc: "Strengthens arms", teacher: "Instructor J", timing: "2-4 min" },
      { img: "https://t3.ftcdn.net/jpg/04/62/21/92/240_F_462219290_t2pMQvq0NR6Gv4mTyvi0dqG8NmhsbJGd.jpg", name: "Natarajasana", desc: "Enhances balance", teacher: "Instructor K", timing: "3-5 min" },
      { img: "https://t3.ftcdn.net/jpg/04/61/26/26/240_F_461262673_xp2U02vMJxPWOF9oBqiVFVEukCRHHSn3.jpg", name: "Eka Pada Rajakapotasana", desc: "Opens hips", teacher: "Instructor L", timing: "3-6 min" }
    ]
  }
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    navigate(`/asana/${card.name}`, { state: card });
  };

  return (
    <div className="yogaGallery">
      {yogaData.map((section, index) => (
        <div key={index} className="yogaSection">
          <h2 className="sectionLabel">{section.label}</h2>
          <div className="cardRow">
            {section.cards.map((card, idx) => (
              <div className="yogaCard" key={idx} onClick={() => handleCardClick(card)}>
                <img src={`${card.img}?auto=format&fit=crop&w=500&q=80`} alt={card.name} className="yogaImage" />
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
                <span className="teacherName">By {card.teacher}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
