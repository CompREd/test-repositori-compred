import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Resource from './interfaces/resource';
import onlyUnique from './utils/only_unique';

const dimensionToColor = new Map();
dimensionToColor.set('Planificació de la recerca', 'c1');
dimensionToColor.set('Fonamentació teòrica', 'c2');
dimensionToColor.set('Disseny i aplicació', 'c3');
dimensionToColor.set('Discussió i conclusions', 'c4');
dimensionToColor.set('Bibliografia', 'c5');
dimensionToColor.set('Comunicació i TIC', 'c6');

const resources: Array<Resource> = [
  {
    title: 'Planteamiento del problema de investigación: desde la óptica cuantitativa y cualitativa',
    type: 'Llibre',
    dimension: 'Planificació de la recerca',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 2,
    url: 'https://www.uca.ac.cr/wp-content/uploads/2017/10/Investigacion.pdf',
  },
  {
    title: '¿Cómo escoger un tema de investigación y construir una pregunta de investigación?',
    type: 'Article',
    dimension: 'Planificació de la recerca',
    subdimension: 'Elecció del tema i pregunta de recerca',
    level: 1,
    url: 'https://www.redalyc.org/pdf/1794/179421472004.pdf',
  },
  {
    title: 'La formulació dels objectius de recerca',
    type: 'Recurs web',
    dimension: 'Planificació de la recerca',
    subdimension: 'Formulació d\'objectius i hipòtesis',
    level: 1,
    url: 'https://www.eltefege.eu/index.php/2018/03/15/apunt-4-la-formulacio-dels-objectius-de-recerca/',
  },
  {
    title: 'Transcripció de Dades Plurilingües/Multimodals',
    type: 'Recurs web',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 2,
    url: 'https://tutorialfortrans.blogspot.com/',
  },
  {
    title: 'Good Literature Searching',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 1,
    url: 'https://www.review.mai.ac.nz/mrindex/TK/article/view/53/53.html',
  },
  {
    title: 'Art of reading a journal article: Methodically and effectively',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Cerca d\'informació',
    level: 1,
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3687192/',
  },
  {
    title: 'Eines i recursos documentals per al treball de recerca en Educació',
    type: 'Presentació',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Eines per cercar informació',
    level: 2,
    url: 'https://ddd.uab.cat/record/142532',
  },
  {
    title: 'Cerca i gestió de la informació: les principals fonts d\'informació en Educació, Psicologia i Logopèdia',
    type: 'Presentació',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Eines per cercar informació',
    level: 1,
    url: 'https://ddd.uab.cat/record/174633',
  },
  {
    title: 'Approaching literature review for academic purposes',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Estratègies d\'elaboració del text',
    level: 1,
    url: 'https://www.scielo.br/scielo.php?pid=S1807-59322019000100318&script=sci_arttext',
  },
  {
    title: 'Best-Practice Recommendations of Methodological Literature Reviews',
    type: 'Article',
    dimension: 'Fonamentació teòrica',
    subdimension: 'Estratègies d\'elaboració del text',
    level: 2,
    url: 'https://journals.sagepub.com/doi/full/10.1177/1094428120943281',
  },
  {
    title: 'Recerca qualitativa sobre educació plurilingüe',
    type: 'Llibre',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 2,
    url: 'https://research-publishing.net/publication/978-1-908416-47-6.pdf',
  },
  {
    title: 'Studying the Use of Research Evidence: A Review of Methods',
    type: 'Llibre',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 2,
    url: 'https://wtgrantfoundation.org/library/uploads/2019/02/A-Review-of-Methods-FINAL003.pdf',
  },
  {
    title: 'Historias de vida',
    type: 'Article',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    url: 'https://revistas.upr.edu/index.php/griot/article/download/1775/1568',
  },
  {
    title: 'Quantitatiu o Qualitatiu? Escull!',
    type: 'Quiz',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    url: 'https://goo.gl/ZMy8E6',
  },
  {
    title: 'A guide for naming research studies',
    type: 'Article',
    dimension: 'Disseny i aplicació',
    subdimension: 'Dissenys metodològics',
    level: 1,
    url: 'https://www.redalyc.org/pdf/337/33770318.pdf',
  },
  {
    title: 'Discussió vs conclusions: principis i directrius ',
    type: 'Vídeo',
    dimension: 'Discussió i conclusions',
    level: 1,
    url: 'https://www.youtube.com/watch?v=_0MwkPVxLYo&list=PLfbyb8xMvO3GYYg9NphpQcrtxrruFTY9R&index=4',
  },
  {
    title: 'What\'s new in APA Style 7th Edition',
    type: 'Vídeo',
    dimension: 'Bibliografia',
    level: 1,
    url: 'https://www.youtube.com/watch?v=jOVZp8m0PCM&feature=youtu.be',
  },
  {
    title: 'Com citar i referenciar en els textos acadèmics',
    type: 'Llibre',
    dimension: 'Bibliografia',
    level: 1,
    url: 'https://ddd.uab.cat/record/145881?ln=es',
  },
  {
    title: 'Com elaborar el Treball Final de Grau',
    type: 'Vídeo',
    dimension: 'Comunicació i TIC',
    subdimension: 'Comunicació escrita i oral de la recerca',
    level: 1,
    url: 'https://www.youtube.com/watch?v=8NtqeUeGJTM',
  },
];

const App: React.FC = () => {
  const [filter, setFilter] = useState<string>('');

  const dimensions = resources.map((resource) => resource.dimension).filter(onlyUnique);

  return (
    <div className="overflow-scroll">
      <div className="flex flex-col items-center gap-4 justify-center w-[100vw] h-[80vh] bg-gray-50">
        <h1 className="font-bold uppercase text-xl rounded-lg bg-gray-300 px-2 py-1 mt-10">Recursos CompREd [test]</h1>
        <div className="flex gap-2 flex-wrap justify-center mx-10">
          <button type="button" className="bg-gray-400 rounded-full text-white px-2 py-1" onClick={() => setFilter('')}>Tots</button>
          { dimensions.map((d) => {
            const color = dimensionToColor.get(d);
            return <button key={uuid()} type="button" className={`bg-${color} rounded-full text-white px-2 py-1`} onClick={() => setFilter(d)}>{d}</button>;
          })}
        </div>
        <div className="bg-gray-200 h-[80vh] lg:w-[70vw] mx-8 rounded-lg shadow-lg overflow-scroll">
          { resources.filter((r) => r.dimension.includes(filter)).map((resource) => {
            const color = dimensionToColor.get(resource.dimension);
            return (
              <div key={uuid()} className="flex flex-col relative m-4 p-4 rounded-md bg-white shadow-md">
                <span className={`bg-${color} text-white font-semibold rounded-full px-2 py-1 w-fit`}>{resource.dimension}</span>
                <div className="py-2" />
                <a className="hover:text-gray-500 w-fit" href={resource.url} target="_blank" rel="noreferrer"><h1 className="font-bold">{`${resource.type}: ${resource.title}`}</h1></a>
                <span>{resource.subdimension ? `→ ${resource.subdimension}` : ''}</span>
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
        <h1 className="font-bold uppercase text-xl rounded-lg bg-gray-400 px-2 py-1 mt-10 text-white">Recursos CompREd [test]</h1>
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
                <span className="text-white">{resource.subdimension ? `→ ${resource.subdimension}` : ''}</span>
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
};
export default App;
