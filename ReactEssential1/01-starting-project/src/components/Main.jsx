import React from 'react'
import CoreConcept from './CoreConcept'
import componentsImg from "/src/assets/components.png";
import { CORE_CONCEPTS } from '../data.js';
import TabButton from './TabButton.jsx';

const Main = () => {

  function handleSelect(){
    console.log("Hello Select");
  }
  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} 
            /> 
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect = {handleSelect}>Components</TabButton>
            <TabButton onSelect = {handleSelect}>JSX</TabButton>
            <TabButton onSelect = {handleSelect}>Props</TabButton>
            <TabButton onSelect = {handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  )
}

export default Main
