import React from 'react';
import { teamMembers } from './TeamData';
import TeamNode from './TeamNode';

export default function TeamTree() {
  const [founder, ...team] = teamMembers;
  const strategists = team.filter(member => member.role.includes('Strategist'));
  const representatives = team.filter(member => member.role.includes('Representative'));

  return (
    <div className="max-w-6xl mx-auto">
      {/* Founder Node */}
      <div className="flex justify-center mb-16">
        <TeamNode member={founder} isFounder />
      </div>

      {/* Connecting Line */}
      <div className="w-px h-16 bg-gradient-to-b from-[#FF0000] to-[#FF0000]/20 mx-auto -mt-8 mb-8" />

      {/* Strategists Level */}
      <div className="flex justify-center gap-8 mb-16">
        {strategists.map((strategist) => (
          <div key={strategist.name} className="relative">
            <TeamNode member={strategist} />
          </div>
        ))}
      </div>

      {/* Connecting Lines */}
      <div className="relative -mt-8 mb-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-[#FF0000]/20 via-[#FF0000] to-[#FF0000]/20" />
        <div className="flex justify-center gap-[30%]">
          {representatives.map((_, index) => (
            <div key={index} className="w-px h-16 bg-gradient-to-b from-[#FF0000] to-[#FF0000]/20" />
          ))}
        </div>
      </div>

      {/* Representatives Level */}
      <div className="flex justify-center gap-8">
        {representatives.map((representative) => (
          <div key={representative.name}>
            <TeamNode member={representative} />
          </div>
        ))}
      </div>
    </div>
  );
}