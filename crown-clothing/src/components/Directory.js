import CategoryItem from "./CategoryItem";
import './Directory.css';

const Directory = ({categories}) =>
{
    return (
      <div className="directory-container">
       { categories.map(each =>
            {
              return <CategoryItem key={each.id} item={each} />
            }
          )}
          </div>
    );
}

export default Directory;