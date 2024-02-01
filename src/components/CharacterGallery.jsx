import characterData from "../data/CharacterData.json";
import Character from "./Character";

const CharacterGallery = () => {
  // Body
  return (
    <div>
      {characterData.map((character) => (
        <Character 
        key={character.id} 
        name={character.name}
        img={character.imgUrl}
        dob={character.birth}
        dod={character.death}
        race={character.race}
        realm={character.realm}
        spouse={character.spouse}

        
        />
      ))}
    </div>
  );
};
export default CharacterGallery;
