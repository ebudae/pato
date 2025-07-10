import React, { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContext';

const FreePresets = () => {
  const { theme } = useContext(ThemeContext);

  const presets = [
    { id: 1, name: 'Synthwave Bass Pack', downloadLink: '/resources/synthwave_bass_pack.zip' },
    { id: 2, name: 'Ambient Pad Collection', downloadLink: '/resources/ambient_pad_collection.zip' },
    { id: 3, name: 'Drum Machine Grooves', downloadLink: '/resources/drum_machine_grooves.zip' },
  ];

  return (
    <Container className="my-4">
      <h2 className="mb-4" style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>Free Presets</h2>
      <p style={{ color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)' }}>
        Download these free presets to enhance your music production!
      </p>
      <ListGroup>
        {presets.map((preset) => (
          <ListGroup.Item
            key={preset.id}
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: theme === 'day' ? 'var(--day-background)' : 'var(--night-background)',
              borderColor: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
              color: theme === 'day' ? 'var(--day-text)' : 'var(--night-text)',
            }}
          >
            {preset.name}
            <a href={preset.downloadLink} download style={{ color: theme === 'day' ? 'var(--day-primary-accent)' : 'var(--night-primary-accent)' }}>
              Download
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FreePresets;