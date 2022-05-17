import React from 'react'

import { MacbookImage } from '../assets'


interface InfoCardProps {
  title: string
  description: string
  model: number
  image: string
}

const InfoCard: React.FC<InfoCardProps> = (props: InfoCardProps) => {
  const { title, description, model, image } = props
  return (
    <div>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto mb-5">
        <a href="#" className="w-full block h-full">
          <img alt="blog photo" src={image} className="max-h-40 w-full object-cover" />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">
              {title}
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {model}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {description}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default InfoCard