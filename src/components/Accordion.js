import React, {useState} from 'react';
import {Accordion, Icon} from 'semantic-ui-react';

const ModularAccordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion fluid styled>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            {item.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            {item.content}
          </Accordion.Content>
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export default ModularAccordion;
