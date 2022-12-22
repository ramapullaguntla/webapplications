import CategoryItem from "./CategoryItem";
import '../styles/Directory.css';

const Directory = ({categories}) =>
{
    return (
      <div className="my-10 grid gap-2 grid-cols-1 p-6 md:grid-cols-3 bg-slate-500">
       { categories.map(each =>
            {
              return <CategoryItem key={each.id} item={each} />
            }
          )}
          </div>
    );
}

export default Directory;