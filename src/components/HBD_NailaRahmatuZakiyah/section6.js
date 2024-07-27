import React from 'react';

import section6Styles from './section6.module.scss';

function renderSection6(props) {
  return (
    <section className={section6Styles.introduction_section}>
      {/* Section introduces Mowland Production and highlights the purpose and services. */}

      <div className={section6Styles.flex_row}>
        {/* Container for the main content layout with two columns. */}

        <div className={section6Styles.flex_col_intro}>
          <div className={section6Styles.title_and_description_col}>
            {/* Column containing title and description. */}
            <h3 className={section6Styles.product_title_box}>
              {/* Subtitle displaying the name of the production. */}
              <span className={section6Styles.product_title}>
                <span className={section6Styles.product_title_span0}>Mowland </span>
                <span className={section6Styles.product_title_span1}>Production</span>
              </span>
            </h3>
            <p className={section6Styles.intro_description}>
              {/* Description of Mowland Production. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className={section6Styles.image_gallery_row}>
            {/* Row containing images representing the production. */}
            <img
              className={section6Styles.image_item_1}
              src={'/assets/80733ebff3ddfe2438f1e63f030eadcd.svg'}
              alt="alt text"
            />
            <img
              className={section6Styles.image_item_2}
              src={'/assets/0244a0474c1d0c0d3114a6225f6a68fb.svg'}
              alt="alt text"
            />
            <img
              className={section6Styles.image_item_3}
              src={'/assets/5b2011b58e7e6cb22796f6b42ca6ac7f.svg'}
              alt="alt text"
            />
            <img
              className={section6Styles.image_item_4}
              src={'/assets/0eb65ef56fb45390a00bb0e6019245fd.svg'}
              alt="alt text"
            />
          </div>
        </div>

        <div className={section6Styles.flex_col_services}>
          {/* Column containing the services offered. */}

          <div className={section6Styles.services_title_row}>
            {/* Row containing the title of the services section. */}
            <h3 className={section6Styles.services_title}>
              {/* Title of the services offered. */}
              Our Services
            </h3>
            <hr className={section6Styles.services_separator_line} size={1} />
          </div>

          <div className={section6Styles.services_list_col}>
            {/* Column containing a list of services. */}

            <div className={section6Styles.service_item_row_1}>
              {/* Row for the first service item with image and description. */}
              <img
                className={section6Styles.service_image_1}
                src={'/assets/129db5633e688ac1e8382ab1e86039d8.svg'}
                alt="alt text"
              />
              <p className={section6Styles.service_name_1}>Application Builder</p>
            </div>

            <div className={section6Styles.service_item_row_2}>
              {/* Row for the second service item with image and description. */}
              <img
                className={section6Styles.service_image_2}
                src={'/assets/129db5633e688ac1e8382ab1e86039d8.svg'}
                alt="alt text"
              />
              <p className={section6Styles.service_name_2}>Website Builder</p>
            </div>

            <div className={section6Styles.service_item_row_3}>
              {/* Row for the third service item with image and description. */}
              <img
                className={section6Styles.service_image_3}
                src={'/assets/129db5633e688ac1e8382ab1e86039d8.svg'}
                alt="alt text"
              />
              <p className={section6Styles.service_name_3}>Graphic Design</p>
            </div>

            <div className={section6Styles.service_item_row_4}>
              {/* Row for the fourth service item with image and description. */}
              <img
                className={section6Styles.service_image_4}
                src={'/assets/129db5633e688ac1e8382ab1e86039d8.svg'}
                alt="alt text"
              />
              <p className={section6Styles.service_name_4}>Presentation Slide</p>
            </div>
          </div>
        </div>
      </div>

      <img
        className={section6Styles.highlight_image}
        src={'/assets/da9cd8721f856358b20312401b03f06b.png'}
        alt="alt text"
      />
      {/* Image that highlights Mowland Production. */}
    </section>
  );
}

export default renderSection6;
