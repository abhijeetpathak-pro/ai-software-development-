export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="wq-team-card">
      <div className="wq-team-card-photo">
        <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" />
      </div>
      <div className="wq-team-card-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <span className="wq-team-linkedin" aria-label={`${member.name} on LinkedIn`} title="LinkedIn">
          in
        </span>
      </div>
    </article>
  );
}
