const MealList = () => {
    return (  
        <div className="MealList">
            {meals.map((meal) =>(
                <div className="mealpriv" key={meal.id}>
                    <h2>{ meal.Name }</h2>
                    <p>{ meal.Description }</p>
                    <h3> {meal.Price} </h3>
                </div>
            ))}
        </div>
    );
}
 
export default MealList;