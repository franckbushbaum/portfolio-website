import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm Franck! I recently developed a passion for coding and web development. Here are some projects that I'm proud of!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/franckbushbaum'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;