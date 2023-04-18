import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
// import fetchURL from "../../function/fetch";

import { useState, useEffect } from "react";
const AvailableMeals = () => {
  const [datas, setFetchedDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMeals = async () => {
    const response = await fetch(
      "https://udemy-24192-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();

    setFetchedDatas(data);

    console.log(data);
    let meals = [];
    for (const key in data) {
      meals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: Number(data[key].price)
      });
    }

    setFetchedDatas(meals);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
      console.log("hi");
    });
  }, []);

  let mealsList;
  if (isLoading) {
    mealsList = <p>loading</p>;
  } else if (error) {
    mealsList = <p>{error}</p>;
  } else {
    mealsList = datas.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
