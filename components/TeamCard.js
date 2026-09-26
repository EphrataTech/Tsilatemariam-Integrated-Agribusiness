import Image from "next/image";

function PersonAvatar() {
  return (
    <svg viewBox="0 0 46 46" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="23" cy="23" r="23" fill="var(--forest-500)" />
      <circle cx="23" cy="18" r="7" fill="var(--cream-50)" opacity="0.9" />
      <ellipse cx="23" cy="38" rx="12" ry="8" fill="var(--cream-50)" opacity="0.9" />
    </svg>
  );
}

export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      {member.photo
        ? <Image src={member.photo} alt={member.name} className="team-photo" width={200} height={200} loading="lazy" />
        : <div className="team-photo" style={{ background: "none", padding: 0 }}><PersonAvatar /></div>
      }
      <p className="role">{member.role}</p>
      <h4>{member.name}</h4>
    </div>
  );
}
