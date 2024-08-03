import Image from 'next/image'

const Block = ({title, para}) => {
  return (
    <div className='flex items-center w-48 h-full border-r border-gray-300 '>
        <Image src={'./demo.svg'} alt="demo" width={200} height={200} className='w-10 h-10 mr-5 rounded-full'/>
        <div>
            <h3 className='font-bold '>{title} </h3>
            <p className='text-xs text-gray-400 line-clamp-1'>{para}</p>
        </div>
    </div>
  );
};

export default Block;
