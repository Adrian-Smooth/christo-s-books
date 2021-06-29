import React from 'react';
import { withRouter } from 'react-router-dom';
import workingInPublic from '../../assets/working-in-public.jpg';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={workingInPublic} alt='working in public'/>
        </div>
        <div className='ms-m-description'>
          <h2>The Making and Maintenance of Open Source Software</h2>
          <p>
          In <i>Working in Public</i>, Nadia Eghbal takes an inside look at modern open source software development, its evolution over the last two decades, and its ramifications for an internet reorienting itself around individual creators.
          </p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/3')}>
           EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);