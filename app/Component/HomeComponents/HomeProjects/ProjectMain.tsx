import React from 'react';
import { HomeProjectData2 } from './HomeProjectData';
import Image from 'next/image';

interface Props {
  proj: string;
}

const ProjectMain: React.FC<Props> = ({ proj }) => {
  console.log(proj);

  return (
    <div className='flex justify-center mt-7'>
      <div>
        {proj === "All" ? (
          <div className='flex flex-wrap justify-start w-[1150px] m-auto'>
            {HomeProjectData2.map((item: string, index: number) => (
              <div key={index} className='flex flex-col h-[300px] w-[310px] my-7 mx-9'>
                <Image
                  src={`/Home-project-${index}.jpg`}
                  height={233}
                  width={310}
                  alt={`Project image`}
                  className='bg-white'
                />
                <div className='flex flex-col mt-4'>
                  <h4 className='text-[20px]'>{item}</h4>
                  <h5 className='text-[#8F98A8]'>{item}</h5>
                </div>
              </div>
            ))}
          </div>
        ) : (
          (() => {
            const index = HomeProjectData2.indexOf(proj);
            if (index === -1) {
              return <div>Project not found</div>; 
            }
            return (
              <div key={index} className='flex flex-col h-[300px] w-[310px] my-7 mx-9'>
                <Image
                  src={`/Home-project-${index}.jpg`}
                  height={233}
                  width={310}
                  alt={`Project image`}
                  className='bg-white'
                />
                <div className='flex flex-col mt-4'>
                  <h4 className='text-[20px]'>{proj}</h4>
                  <h5 className='text-[#8F98A8]'>{proj}</h5>
                </div>
              </div>
            );
          })()
        )
        }
      </div>
    </div>
  );
};

export default ProjectMain;
