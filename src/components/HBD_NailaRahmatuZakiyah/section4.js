import React from 'react';

import section4Styles from './section4.module.scss';

function renderSection4(props) {
  return (
    <section
      className={section4Styles.quotes_section}
      style={{ '--src': `url(${'/assets/34ab62a1d0a6ced86439d8e8f1a044ef.png'})` }}>
      {/* Main section containing quotes and descriptive text */}
      <img
        className={section4Styles.decorative_image}
        src={'/assets/d2934d33d05bc1043d06cc200d6f354f.png'}
        alt="alt text"
      />
      {/* Decorative image for visual enhancement */}

      <div className={section4Styles.quotes_content_col}>
        {/* Column layout for quotes and their description */}
        <h1 className={section4Styles.quote_title}>
          {/* Main title for the quotes section */}
          Quotes
        </h1>
        <h3 className={section4Styles.quote_subtitle}>
          {/* Subtitle providing additional context for the quote */}
          Lorem ipsum dolor sit amet consectetur. Suscipit placerat pharetra ipsum at tempor sed netus convallis sed.
          Nunc varius aliquet ultrices in vitae fermentum elementum est gravida. Mauris blandit molestie ac sed eget
          magna sed cras. Suspendisse malesuada elementum egestas tincidunt facilisis morbi in blandit.
        </h3>
      </div>
    </section>
  );
}

export default renderSection4;
