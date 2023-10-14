import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '3000+ Model Archive',
    description: (
      <>
        Prototype your game, with a library of over 3000 pre-made 3D models. Just drag & drop models into the scene.
      </>
    ),
  },
  {
    title: 'Custom Libraries',
    description: (
      <>
        Create your very own 3D and 2D (supported in Unity-version) model libraries. Set metadata like name, categories, tags, etc. to make your models easier to find.
      </>
    ),
  },
  {
    title: 'Git Integration',
    description: (
      <>
        Share your model libraries with your team or with the whole world. The Git version control system easily integrates with the plugin.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
