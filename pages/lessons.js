import React from 'react';
import Layout from '../containers/Layout';

const Lessons = () => (
  <Layout>
    <p>
      Shirley Johnson teaches students of all ages - from elementary
      school children through adults - how to play the piano accordion.
    </p>
    <p>
      Students in the Austin, TX area can take lesson in person, and
      students anywhere in the USA can take lessons online via Skype.
    </p>
    <div>
      Shirley teaches:
      <ul>
        <li>
          {`
            Beginner accordion students of all ages who have never
            played an instrument before.
            `}
        </li>
        <li>
          {`
            Teenagers who play in their school bands, who want to
            learn another instrument.
            `}
        </li>
        <li>
          {`
            Piano players who want to learn the accordion, and haven’t
            quite figured out how to play accordion chords.
            `}
        </li>
        <li>
          {`
            Young adults who are discovering just how cool the
            accordion really is.
            `}
        </li>
        <li>
          {`
            Mature adults who played as kids, put the instrument down as
            their life got busy, who now have time to pick it up again.
            `}
        </li>
      </ul>
    </div>

  </Layout>
);

export default Lessons;
