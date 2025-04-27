import React, { useState } from 'react';

import imag1 from './images/announcement.png';
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
      title: 'Umuganda',
      content:
        "Kuri iki kibazo, Umuyobozi w'Akarere ka Kamonyi Dr. Nahayo Sylvere wari witabiriye uyu muganda usoza ukwezi wa Werurwe 2022...",
    },
    {
      id: 3,
      imgsrc: imag3,
      title: 'Uburiganire',
      content: "Kuva kera umuryango wari ugizwe n'umugabo, umugore we n'abana babyaranye, iyo babashije kubagira. Ijambo inshingano ryo rivuga imirimo umuntu agomba gukora. Tugiye kurebera hamwe uko umuco w'Abanyarwanda wateganyaga inshingano z'umugabo, iz'umugore n'iz'abana. Mu muco nyarwanda, umugabo yari nyiri urugo. Yafatwaga nk'umuyobozi w'umuryango akawuhagararira, akawuhahira, akawitangira muri byose.",
    },
    {
      id: 4,
      imgsrc: imag4,
      title: 'Iterambere',
      content: '"Before anything else, preparation is the key to success." — Alexander Graham Bell',
    },
    {
      id: 5,
      imgsrc: imag5,
      title: 'Uburezi',
      content: '"Before anything else, preparation is the key to success." — Alexander Graham Bell',
    },
    {
      id: 6,
      imgsrc: imag6,
      title: 'Ikoranabuhanga',
      content: '"Before anything else, preparation is the key to success." — Alexander Graham Bell',
    },
    {
      id: 7,
      imgsrc: imag7,
      title: 'Kwibuka',
      content: '"Before anything else, preparation is the key to success." — Alexander Graham Bell',
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState('');
  const [tempTitle, setTempTitle] = useState('');
  const [tempContent, setTempContent] = useState('');

  const getImg = (imgsrc, title, content) => {
    setTempImgsrc(imgsrc);
    setTempTitle(title);
    setTempContent(content);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <>
      {/* Modal */}
      <div className={model ? 'model open' : 'model'} onClick={closeModel}>
        <div className="model-content" onClick={(e) => e.stopPropagation()}>
         <b> <h2 className="modal-title">{tempTitle}</h2> </b>{/* Title in Modal */}
          <img src={tempImgsrc} alt="content" />
          <p>{tempContent}</p>
          <img
            src="./images/closing.png"
            alt="close"
            onClick={closeModel}
            className="close-icon"
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery">
        {Mydata.map((item) => (
          <div
            className="pics"
            key={item.id}
            onClick={() => getImg(item.imgsrc, item.title, item.content)}
          >
            {/* Title */}
           <b> <h2 className="content-title">{item.title}</h2></b>
            {/* Image */}
            <img src={item.imgsrc} alt={item.title} />
            {/* Content */}
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contents;
