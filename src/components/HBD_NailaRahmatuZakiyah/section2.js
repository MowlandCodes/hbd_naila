import React from 'react';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section
      className={section2Styles.intro_section}
      style={{ '--src': `url(${'/assets/29ba8600f2ae330945f937e593c9c8ce.png'})` }}>
      {/* This section serves as an introduction, displaying the profile information and image. */}

      <div className={section2Styles.flex_col_container}>
        {/* Container for flexibly aligning child elements in a column. */}
        <img
          className={section2Styles.profile_image}
          src={'/assets/5f33777916bc4f51cdae822e6cae859a.svg'}
          alt="alt text"
        />

        <div className={section2Styles.group}>
          <h1 className={section2Styles.profile_name}>
            {/* Main heading representing the individual's name. */}
            Naila Rahmatu Zakiyah
          </h1>
          <h3 className={section2Styles.profile_age}>
            {/* Subheading indicating the individual's age. */}
            19 Years Old
          </h3>
        </div>

        <p className={section2Styles.profile_bio}>
          {/* Brief biography or introduction about the individual. */}
          Lorem ipsum dolor sit amet consectetur. Volutpat facilisis nullam purus ante elementum eu ullamcorper urna.
          Nisl et vel aliquet duis mauris sit leo phasellus laoreet. Nullam ipsum dictum amet in facilisis est. Magna
          facilisis cras phasellus et quam pretium adipiscing enim placerat.
        </p>
      </div>
    </section>
  );
}

export default renderSection2;
