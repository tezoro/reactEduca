import React from 'react';
import s from './News.module.css';

const News = (props) =>
   <article>
      <header>
         <h1>{props.title}</h1>
      </header>
      <div className="recipes">
         {props.recipes.map((recipe, i) =>
            <Recipe key={i} name={recipe.name}
               ingredients={recipe.ingredients}
               steps={recipe.steps} />
         )}
      </div>
   </article>
const Recipe = ({ name, ingredients, steps }) =>
   <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
         {ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.name}</li>
         )}
      </ul>
      <section className="instructions">
         <h2>Cooking Instructions</h2>
         {steps.map((step, i) =>
            <p key={i}>{step}</p>
         )}
      </section>
   </section>
export default News