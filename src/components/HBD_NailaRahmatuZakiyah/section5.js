import React from 'react';

import section5Styles from './section5.module.scss';

function renderSection5(props) {
  return (
    <section
      className={section5Styles.memories_section}
      style={{ '--src': `url(${'/assets/85e38ba0095ea79d8a65d87a59492314.png'})` }}>
      {/* This section displays the memories theme and related imagery. */}

      <div className={section5Styles.image_group}>
        {/* Group container for images related to memories. */}
        <img
          className={section5Styles.memory_image_one}
          src={'/assets/3d7913249a6866995342a09fbf5f2a4f.svg'}
          alt="alt text"
        />
        {/* Image representing a memory. */}

        <div className={section5Styles.flex_column_layout}>
          {/* Flex layout for title and action elements. */}

          <div className={section5Styles.hero_title_container}>
            {/* Container for the main title and description. */}
            <h1 className={section5Styles.hero_title}>
              {/* Main title showcasing the theme of memories. */}
              Our Memories
            </h1>
            <h1 className={section5Styles.description_title_box}>
              {/* Title box containing detailed descriptions about the memories. */}
              <span className={section5Styles.description_title}>
                <span className={section5Styles.description_title_span0}>
                  Beyond this layer, lies a great memories to remember
                  <br />
                  Hard to say, and Hard to forget. But the memories
                  <br />
                  will always carved in mind and will never perished by
                  <br />
                  the time.{' '}
                </span>
                <span className={section5Styles.description_title_span1}>
                  Click the button below to view the content.
                </span>
              </span>
            </h1>
          </div>

          <div className={section5Styles.action_group}>
            {/* Group containing action buttons and related graphics. */}
            <div className={section5Styles.action_rectangle} />
            {/* Visual element serving as a background for actions. */}
            <h1 className={section5Styles.view_button_label}>
              {/* Label for the view button indicating action. */}
              View
            </h1>
          </div>
        </div>

        <img
          className={section5Styles.memory_image_two}
          src={'/assets/9b6cb52c40e334de8e8dbf643968b7e3.svg'}
          alt="alt text"
        />
        {/* Additional image representing another memory. */}
      </div>

      <img
        className={section5Styles.memory_image_three}
        src={'/assets/c8cd8a95e142d277f38f342a7795c9aa.png'}
        alt="alt text"
      />
      {/* Image depicting a significant memory. */}
      <img
        className={section5Styles.memory_image_four}
        src={'/assets/bde9ab2a01bffdd77bef2889b638ca33.png'}
        alt="alt text"
      />
      {/* Another image relating to the theme of memories. */}
    </section>
  );
}

export default renderSection5;
