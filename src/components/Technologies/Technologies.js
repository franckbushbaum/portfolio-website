import React from 'react';
import { DiFirebase, DiReact, DiMailchimp, DiJavascript, DiCss3 } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I'VE WORKED WITH A RANGE OF TECHNOLOGIES IN THE WEB DEVELOPMENT WORLD <br /> FROM BACK-END TO DESIGN.
    </SectionText>
    <List>
      <ListItem>
        <div>
        <DiReact size="3rem" /><DiJavascript size="3rem" /><DiCss3 size="3rem" /></div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, PostgrSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>
            Experience with <br />
            Mailchimp <br />
            Cloudinary <br />
            Alpha Vantage <br />
            Crypto News Live
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
