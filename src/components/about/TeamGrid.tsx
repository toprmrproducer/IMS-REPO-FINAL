import React from 'react';
import TeamMember from './TeamMember';
import { teamMembers } from './TeamData';

export default function TeamGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  );
}