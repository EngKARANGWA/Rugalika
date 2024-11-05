import React, { useState } from 'react';

import imag1 from './images/announcement.png';
import imag2 from './images/letter.jpg';
import imag3 from './images/Sectorim.jpg';
import imag4 from './images/Er.jpeg';
import imag5 from './images/genz.jpg';
import imag6 from './images/ICT.jpg';
import imag7 from './images/K29.jpg';
import './Style/content.css';

const Contents = () => {
  const Mydata = [
    {
      id: 1,
      imgsrc: imag1,
      content: 'Kuri iki kibazo, Umuyobozi w\'Akarere ka Kamonyi Dr. Nahayo Sylvere wari witabiriye uyu muganda usoza ukwezi wa Werurwe 2022, yavuze ko bagiye gukora ibishoboka byose urujya n\'uruza rukongera rugasubukurwa uyu muhanda ugakora. Yagize ati\' niyo mpamvu twazindukiye hano nk\'ubuyobozi kugira ngo dufatanye kubaka iki kiraro. Nta kabuza rero nk\'uko abishize hamwe nta kibananira iri teme riraba ryuzuye mu gihe gito bityo mwogere mugenderane nk\'uko byari bisanzwe ritaratwarwa n\'amazi y\'imvura.\' Yakomeje asaba ko buri wese igihe hari ibikorwaremezo begerejwe bagira uruhare mu kubisigasira no kubirinda kuko iyo bidakozwe usanga bidindiza iterambere ry\'umuturage. Yakomeje avuga ko ibikenewe byose bisabwa n\'akarere ngo iri teme ryubakwe byaratanzwe birimo ibiti n\'ibindi, ibi bikaza kunganira ubushobozi bw\'abaturage ubwabo bishatsemo.',
    },
    {
      id: 2,
      imgsrc: imag2,
      content: 'ITANGAZO Rugalika:......',
    },
    {
      id: 3,
      imgsrc: imag3,
      content: 'ITANGAZO Rugalika:......',
    },
    {
      id: 4,
      imgsrc: imag4,
      content: 'ITANGAZO Rugalika:......',
    },
    {
      id: 5,
      imgsrc: imag5,
      content: 'ITANGAZO Rugalika:......',
    },
    {
      id: 6,
      imgsrc: imag6,
      content: 'ITANGAZO Rugalika:......',
    },
    {
      id: 7,
      imgsrc: imag7,
      content: 'ITANGAZO Rugalika:......',
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState("");
  const [tempContent, setTempContent] = useState("");

  const getImg = (imgsrc, content) => {
    setTempImgsrc(imgsrc);
    setTempContent(content);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <>
      <div className={model ? "model open" : "model"} onClick={closeModel}>
        <div className="model-content">
          <img src={tempImgsrc} alt='content' />
          <p>{tempContent}</p>
          <img src='./images/closing.png' alt='close' onClick={() => setModel(false)} className="close-icon" />
        </div>
      </div>
      <div className='gallery'>
        {Mydata.map((item, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(item.imgsrc, item.content)}>
              <img src={item.imgsrc} alt={`image ${index + 1}`} />
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contents;
