import React, {useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import lang from '../../data/lang'

const LangMenu = () => {

  const UA = require('../../assets/svg/flags/4x3/ru.svg').default

  const [current, setCurrent] = useState(UA)
  const [short,setShort] = useState('ru')

  return (
    <>
    <Dropdown>
      <Dropdown.Toggle variant="light">
        <img src={current} width={18} alt={'flag'} className='mx-1' style={{marginTop: -1.5, display: 'inline-block'}} /> <small> {short.toUpperCase()} </small>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-scroll">
        <div className="scroll-wrapper">
        {lang.map((item) => (
          <Dropdown.Item
            key={item.code}
            onClick={() => {
              setCurrent(item.pic)
              setShort(item.code)
            }}
            className={short === item.code ? 'active' : ''}
          >
            <img src={item.pic} width={18} alt={item.code} className='pb-1 mx-1' /> <small>{item.name}</small>
          </Dropdown.Item>
        ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
};

export default LangMenu
