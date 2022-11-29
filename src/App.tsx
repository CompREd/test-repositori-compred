import React from 'react';
import { v4 as uuid } from 'uuid';

interface Resource {
  title: string
  dimension: string
  subdimension?: string
  level: number
  language: string
  url: string
}

const dimensionToColor = new Map();
dimensionToColor.set('Planificació de la recerca', 'c1');
dimensionToColor.set('Fonamentació teòrica', 'c2');
dimensionToColor.set('Disseny i aplicació', 'c3');
dimensionToColor.set('Discussions i conclusions', 'c4');
dimensionToColor.set('Bibliografia', 'c5');
dimensionToColor.set('Comunicació i TIC', 'c6');

const resources: Array<Resource> = [
  {
    title: 'Planteamiento del problema de investigación: desde la óptica cuantitativa y cualitativa',
    dimension: 'Comunicació i TIC',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 2,
    language: 'Español',
    url: 'https://www.uca.ac.cr/wp-content/uploads/2017/10/Investigacion.pdf',
  },
  {
    title: '¿Cómo escoger un tema de investigación y construir una pregunta de investigación?',
    dimension: 'Planificació de la recerca',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 1,
    language: 'Español',
    url: 'https://www.redalyc.org/pdf/1794/179421472004.pdf',
  },
  {
    title: 'La formulació dels objectius de recerca',
    dimension: 'Planificació de la recerca',
    subdimension: 'Formulació d\'objectius i hipòtesis',
    level: 1,
    language: 'Català',
    url: 'https://www.eltefege.eu/index.php/2018/03/15/apunt-4-la-formulacio-dels-objectius-de-recerca/',
  },
  {
    title: 'La formulació dels objectius de recerca',
    dimension: 'Planificació de la recerca',
    subdimension: 'Formulació d\'objectius i hipòtesis',
    level: 1,
    language: 'Català',
    url: 'https://www.eltefege.eu/index.php/2018/03/15/apunt-4-la-formulacio-dels-objectius-de-recerca/',
  },
];

const App: React.FC = () => (
  <div className="overflow-scroll">
    <div className="flex flex-col items-center gap-4 justify-center w-[100vw] h-[100vh] bg-gray-50">
      <h1 className="font-bold uppercase text-xl rounded-lg bg-gray-300 px-2 py-1">Recursos CompREd [test]</h1>
      <div className="bg-gray-200 h-[80vh] lg:w-[70vw] mx-8 rounded-lg shadow-lg overflow-scroll">
        { resources.map((resource, index) => {
          const color = dimensionToColor.get(resource.dimension);
          return (
            <div key={uuid()} className="flex flex-col relative m-4 p-4 rounded-md bg-white shadow-md">
              <span className={`bg-${color} text-white font-semibold rounded-full px-2 py-1 w-fit`}>{resource.dimension}</span>
              <div className="py-2" />
              <a className="hover:text-gray-500 w-fit" href={resource.url} target="_blank" rel="noreferrer"><h1 className="font-bold">{`Recurs ${index + 1}: ${resource.title}`}</h1></a>
              <span>{`→ ${resource.subdimension}`}</span>
              <div className="py-2" />
              {/* eslint-disable-next-line max-len */}
              <a aria-label="resource-link" className="hover:fill-gray-500" href={resource.url} target="_blank" rel="noreferrer"><svg className="absolute right-6 top-[28%]" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 34q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 17 21 17h-7q-3 0-5 2t-2 5q0 3 2 5t5 2h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 34 21 34Zm3.75-8.5q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h12.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425ZM27 34q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 31 27 31h7q3 0 5-2t2-5q0-3-2-5t-5-2h-7q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 14 27 14h7q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z" /></svg></a>
              <div className="flex items-center">
                <span>Nivell:</span>
                {
                  // eslint-disable-next-line react/no-array-index-key, max-len
                  [...Array(resource.level)].map((e, i) => <svg className={`fill-${color} scale-[.6] mr-[-15px]`} key={i} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-1.7 0-2.875-1.175T19.95 39.95h8.1q0 1.7-1.175 2.875T24 44Zm-6.6-7.15q-.65 0-1.075-.425Q15.9 36 15.9 35.35q0-.65.425-1.075.425-.425 1.075-.425h13.2q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425Zm-1.25-6.05q-3.3-2.15-5.225-5.375Q9 22.2 9 18.15q0-6.1 4.45-10.55Q17.9 3.15 24 3.15q6.1 0 10.55 4.45Q39 12.05 39 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Z" /></svg>)
                }
              </div>
            </div>
          );
        }) }
      </div>
    </div>
    <div className="flex flex-col items-center gap-4 justify-center w-[100vw] h-[100vh] bg-gray-50">
      <h1 className="font-bold uppercase text-xl rounded-lg bg-gray-400 px-2 py-1 text-white">Recursos CompREd [test]</h1>
      <div className="bg-gray-200 h-[80vh] lg:w-[70vw] mx-8 rounded-lg shadow-lg overflow-scroll">
        { resources.map((resource, index) => {
          const color = dimensionToColor.get(resource.dimension);
          return (
            <div key={uuid()} className={`bg-${color} relative flex flex-col m-4 p-4 rounded-md bg-white shadow-md`}>
              <span className={`text-${color} bg-white font-semibold rounded-full px-2 py-1 w-fit`}>{resource.dimension}</span>
              <div className="py-2" />
              <a className="hover:text-gray-500 w-fit" href={resource.url} target="_blank" rel="noreferrer"><h1 className="font-bold text-white">{`Recurs ${index + 1}: ${resource.title}`}</h1></a>
              {/* eslint-disable-next-line max-len */}
              <a aria-label="resource-link" className="hover:fill-gray-500" href={resource.url} target="_blank" rel="noreferrer"><svg className="fill-white absolute right-6 top-[33%]" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 34q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 17 21 17h-7q-3 0-5 2t-2 5q0 3 2 5t5 2h7q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q21.65 34 21 34Zm3.75-8.5q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075.425-.425 1.075-.425h12.5q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425ZM27 34q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 31 27 31h7q3 0 5-2t2-5q0-3-2-5t-5-2h-7q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.35 14 27 14h7q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z" /></svg></a>
              <span className="text-white">{`→ ${resource.subdimension}`}</span>
              <div className="py-2" />
              <div className="flex items-center">
                <span className="text-white">Nivell: </span>
                {
                  // eslint-disable-next-line react/no-array-index-key, max-len
                  [...Array(resource.level)].map((e, i) => <svg className="fill-white scale-[.6] mr-[-15px]" key={i} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-1.7 0-2.875-1.175T19.95 39.95h8.1q0 1.7-1.175 2.875T24 44Zm-6.6-7.15q-.65 0-1.075-.425Q15.9 36 15.9 35.35q0-.65.425-1.075.425-.425 1.075-.425h13.2q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425Zm-1.25-6.05q-3.3-2.15-5.225-5.375Q9 22.2 9 18.15q0-6.1 4.45-10.55Q17.9 3.15 24 3.15q6.1 0 10.55 4.45Q39 12.05 39 18.15q0 4.05-1.9 7.275-1.9 3.225-5.25 5.375Z" /></svg>)
                }
              </div>
            </div>
          );
        }) }
      </div>
    </div>
  </div>
);
export default App;
