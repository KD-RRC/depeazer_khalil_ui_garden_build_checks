import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Img from './components/Img';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import HeroImage from './components/HeroImage';
import Table from './components/Table';

const PageWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const SectionTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eeeeee;
  padding-bottom: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
`;

function App() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  return (
    <PageWrapper>
      <HeroImage
        imageUrl="https://picsum.photos/960/300"
        heading="Depeazer Khalil UI Garden"
        subheading="A React + Storybook component library"
      />

      <SectionTitle>Buttons</SectionTitle>
      <Row>
        <Button label="Default Button" onClick={() => alert('Clicked!')} />
        <Button label="Disabled Button" disabled />
      </Row>

      <SectionTitle>Labels & Text</SectionTitle>
      <Row>
        <Label text="Username" />
        <Label text="Disabled Label" disabled />
      </Row>
      <Text content="This is a sample paragraph of body text rendered by the Text component." />

      <SectionTitle>Images</SectionTitle>
      <Row>
        <Img src="https://picsum.photos/200/150" alt="Sample landscape" />
        <Img src="https://picsum.photos/200/150?grayscale" alt="Disabled sample" disabled />
      </Row>

      <SectionTitle>Card</SectionTitle>
      <Card
        title="Sample Card"
        description="Cards combine an image, title, and description into one styled unit."
        imageUrl="https://picsum.photos/300/180"
      />

      <SectionTitle>Dropdown</SectionTitle>
      <Dropdown
        options={fruitOptions}
        value={selectedFruit}
        onChange={setSelectedFruit}
      />

      <SectionTitle>Radio Buttons</SectionTitle>
      <Row>
        <RadioButton
          label="Basic Plan"
          name="plan"
          value="basic"
          checked={selectedPlan === 'basic'}
          onChange={setSelectedPlan}
        />
        <RadioButton
          label="Pro Plan"
          name="plan"
          value="pro"
          checked={selectedPlan === 'pro'}
          onChange={setSelectedPlan}
        />
        <RadioButton
          label="Disabled Plan"
          name="plan"
          value="disabled-plan"
          disabled
        />
      </Row>

      <SectionTitle>Table</SectionTitle>
      <Table
        headers={['Name', 'Email', 'Role']}
        rows={[
          ['Khalil Depeazer', 'khalil@example.com', 'Developer'],
          ['Jane Smith', 'jane@example.com', 'Designer'],
        ]}
        footer={['Total', '2 users', '']}
      />
    </PageWrapper>
  );
}

export default App;