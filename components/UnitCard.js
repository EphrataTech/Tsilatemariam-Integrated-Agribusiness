import Link from "next/link";
import UnitIcon from "./UnitIcon";

export default function UnitCard({ unit }) {
  const planned = unit.status.toLowerCase().includes("planned");
  return (
    <Link href={`/units/${unit.id}`} className={`unit-card${planned ? " unit-card--planned" : ""}`}>
      <div className="unit-card-icon">
        <UnitIcon id={unit.icon} size={30} />
      </div>
      <div className="unit-card-body">
        <span className="status">{unit.status}</span>
        <h3>{unit.name}</h3>
        <p>{unit.short}</p>
      </div>
      <span className="go">View details →</span>
    </Link>
  );
}
