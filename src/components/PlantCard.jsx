function PlantCard({ name, sunlight, bloomSeason, height, description }) {
  return (
    <article className="plant-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        <li><strong>Sunlight:</strong> {sunlight}</li>
        <li><strong>Bloom season:</strong> {bloomSeason}</li>
        <li><strong>Height:</strong> {height} m</li>
      </ul>
    </article>
  );
}

export default PlantCard;
