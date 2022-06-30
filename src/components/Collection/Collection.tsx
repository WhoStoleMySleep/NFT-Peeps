import React from 'react';
import './Collection.scss'
import group from '../../assets/images/group.png'
const ImgSuspense = React.lazy(() => import('../ImgSuspense/ImgSuspense'))

const Collection = () => {
  return (
    <section className='collection' id='collection'>
      <p className='collection__upper'>
        Collection
      </p>
      <h2 className='collection__headed'>
        Meet Our Bored Peeps!
      </h2>
      <div className='collection__row'>
        <ul className='collection__list-col'>
          <li className='collection__list-item'>
            <h4 className='collection__list-headed'>6500 Bored Peeps</h4>
            <p className='collection__list-additional'>
              Tempor interdum sed nisl aliquam ut orci feugiat neque.
              Nibh amet proin in tristique.
              Ipsum morbi adipiscing faucibus eu odio in tellus risus.
            </p>
          </li>
          <li className='collection__list-item'>
            <h4 className='collection__list-headed'>Mint Price & Date</h4>
            <p className='collection__list-additional'>
              Tempor interdum sed nisl aliquam ut orci feugiat neque.
              Nibh amet proin in tristique.
              Ipsum morbi adipiscing faucibus eu odio in tellus risus.
            </p>
          </li>
          <li className='collection__list-item'>
            <h4 className='collection__list-headed'>Why Bored Peeps</h4>
            <p className='collection__list-additional'>
              Tempor interdum sed nisl aliquam ut orci feugiat neque.
              Nibh amet proin in tristique.
              Ipsum morbi adipiscing faucibus eu odio in tellus risus.
            </p>
          </li>
        </ul>
        {window.screen.width > 890 &&
          <ImgSuspense src={group} className={'collection__image'} />
        }
      </div>
    </section>
  );
}

export default Collection;
