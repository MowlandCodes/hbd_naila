import React from 'react';

import section3Styles from './section3.module.scss';

function renderSection3(props) {
  return (
    <section className={section3Styles.about_her_section}>
      {/* This section contains information about the subject. It includes images and descriptive content. */}
      <img
        className={section3Styles.hero_image_1}
        src={'/assets/c0fc2cddf72d576eecb3e646a602569c.png'}
        alt="alt text"
      />
      {/* This is the main hero image representing the subject. */}

      <div className={section3Styles.flex_container}>
        {/* This div serves as a flex container for the secondary images and text content. */}
        <img
          className={section3Styles.secondary_image_1}
          src={'/assets/1bdc6f3d2aaa0c2f9b700ca899c7c6da.svg'}
          alt="alt text"
        />
        {/* This is a secondary image related to the subject. */}

        <div className={section3Styles.image_and_text_container}>
          {/* This div contains an image and descriptive text. */}
          <h1 className={section3Styles.hero_title}>
            {/* This is the main title for the section, conveying the subject's identity. */}
            About Her
          </h1>
          <p className={section3Styles.about_her_description}>
            {/* This paragraph provides descriptive content about the subject. */}
            Lorem ipsum dolor sit amet consectetur. Elit accumsan quisque fermentum mauris eget id. Fermentum enim risus
            quis lobortis velit eros erat sed nunc. Pellentesque massa malesuada quis mauris egestas neque. Ac sed elit
            semper pulvinar ac elit vivamus tempus. Nibh potenti sed lorem ornare dolor mattis morbi mattis. Cras risus
            mattis feugiat dui nunc libero tincidunt. Amet at cras magna velit faucibus. Laoreet vitae turpis sem
            fringilla urna condimentum est. Justo vulputate <br />
            <br />
            Felis quis dictumst quis at morbi gravida vestibulum quis. Aliquam vehicula ullamcorper pharetra pretium ut
            natoque blandit ipsum ut. Iaculis pellentesque et pellentesque orci lorem. Cursus enim fringilla iaculis dui
            tortor. Euismod est in amet volutpat aliquam ac blandit ut ornare. Sit mauris blandit aliquet quis nec
            tincidunt. Nulla at magna orci suspendisse metus. Eget porttitor enim adipiscing nulla aliquet velit non sed
            feugiat. Ipsum quam vitae pulvinar risus. Vitae auctor urna elementum ac mi ultricies. At felis urna magna
            faucibus sed tortor nulla. Ornare facilisis lacus sit suspendisse eget sit. Dignissim aenean dolor sed proin
            aliquam lectus a mi. Porta porttitor tellus eget in malesuada.
          </p>
        </div>
      </div>

      <img
        className={section3Styles.hero_image_2}
        src={'/assets/d3cabe67742addfc2d60411c98533113.png'}
        alt="alt text"
      />
      {/* This is another hero image representing the subject. */}
    </section>
  );
}

export default renderSection3;
