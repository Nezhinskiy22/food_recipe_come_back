import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipieItem from "../../components/recipie-item";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  console.log(recipeList);

  if (loading) return <div>Loading...please wait.</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipieItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4x1 text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
