import PlantCard from "./PlantCard.jsx";

function PlantList({ plants }) {
  return (
    <section id="plants" className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          sunlight={plant.sunlight}
          bloomSeason={plant.bloomSeason}
          height={plant.height}
          description={plant.description}
        />
      ))}
    </section>
  );
}

export default PlantList;
