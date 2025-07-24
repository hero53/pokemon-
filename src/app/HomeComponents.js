import Link from 'next/link';

const HomeCard = ({pokemon}) => {
  const pokeType = pokemon?.types ?? []
  const stats = pokemon?.stats ?? "-"
  const sprites = pokemon.sprites ?? "-"
  const name = pokemon.name ?? "-"
  return (
    <>
      <div className="card shadow-sm">
        <img
          src={sprites.regular}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title text-danger"><Link
          href={`/pokemon/${pokemon?.pokedex_id}`}
          className=""
        >
         {name.fr}
        </Link></h5>
          <div className="row">
             <div className="col-md-4">
              <p>ATK : {stats.atk} </p>
            </div>
            <div className="col-md-4">
              <p>DEF : {stats.def} </p>
            </div>
            <div className="col-md-4">
              <p>VIT : {stats.vit} </p>
            </div>
          </div>
        
         
          <p className="card-text">
            {
              pokeType.map((type,index)=>(
                <BadgesColor  name={type.name} key={index} />
            ))
            }
           
          </p>
          {/* <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-sm btn-outline-primary">
              Voir
            </button>
            <small className="text-body-secondary">9 mins</small>
          </div> */}
        </div>
      </div>
    </>
  );
};

const BadgesColor = ({ name }) => {
  // Fonction pour retourner les classes CSS selon le type
  const getClassByName = (typeName) => {
    switch (typeName) {
      case 'fire':
        return 'text-danger-emphasis bg-danger-subtle border border-danger-subtle';
      case 'Fée':
        return 'text-primary-emphasis bg-primary-subtle border border-primary-subtle';
      case 'Eau':
      return 'text-light bg-primary border border-primary';
      case 'Feu':
        return 'text-success-emphasis bg-warning border border-warning';
       case 'Vol':
        return 'text-success-emphasis bg-success-subtle border border-success-subtle';
      case 'Électrik':
        return 'text-warning-emphasis bg-warning-subtle border border-warning-subtle';
      case 'Insecte':
        return 'text-info-emphasis bg-info-subtle border border-info-subtle';
      case 'Poison' :
        return 'text-light bg-danger border border-danger ';
      case 'Plante' :
        return 'text-light bg-success border border-success ';
      case 'Sol':
        return 'text-dark-emphasis bg-dark-subtle border border-dark-subtle';
      // Ajoute d’autres cas selon tes besoins
      default:
        return 'text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle';
    }
  };

  return (
    <small
      className={`d-inline-flex mb-3 mx-1 px-2 py-1 fw-semibold rounded-2 ${getClassByName(name)}`}
    >
      {name}
    </small>
  );
};







export default HomeCard
