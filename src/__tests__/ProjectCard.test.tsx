// src/__tests__/ProjectCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../lib/projects';
import { describe, it } from 'node:test';

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    const project = projects[0];
    render(<ProjectCard project={project} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
  });
});
