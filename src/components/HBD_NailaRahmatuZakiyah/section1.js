import React from 'react';

import section1Styles from './section1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.main_content_section}>
      {/* This section contains the main content of the page including images and highlights. */}

      <div className={section1Styles.flex_row_container}>
        {/* This div holds the images and text links arranged in a flexible row layout. */}
        <img
          className={section1Styles.logo_image}
          src={'/assets/273eaa6680cb6a8f99c8476b8f87b1a2.svg'}
          alt="alt text"
        />
        {/* This figure displays the logo of the application. */}
        <p className={section1Styles.highlighted_brand_name}>
          {/* This p tag displays the brand name prominently. */}
          ZAFTION
        </p>
        <p className={section1Styles.highlighted_navigation_home}>
          {/* This p tag serves as a navigation link to the Home page. */}
          Home
        </p>
        <p className={section1Styles.highlighted_navigation_about}>
          {/* This p tag serves as a navigation link to the About page. */}
          About
        </p>
        <p className={section1Styles.highlighted_navigation_quotes}>
          {/* This p tag serves as a navigation link to the Quotes page. */}
          Quotes
        </p>
        <p className={section1Styles.highlighted_navigation_memories}>
          {/* This p tag serves as a navigation link to the Memories page. */}
          Memories
        </p>
      </div>
    </section>
  );
}

export default renderSection1;
