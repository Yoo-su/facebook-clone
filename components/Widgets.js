import Camus from '../public/images/writers/camus.jpg';
import Kafka from '../public/images/writers/kafka.png';
import Kundera from '../public/images/writers/kundera.png';
import Sartre from '../public/images/writers/Sartre.png';
import Harper from '../public/images/writers/harper.png';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts=[
    { name:'Albert Camus', src:Camus,},
    { name:'Franz Kafka', src:Kafka,},
    { name:'Milan Kundera', src:Kundera,},
    { name:'Jean Paul Sartre', src:Sartre,    },
    { name:'Harper Lee', src:Harper,   }
]

function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6'/>
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>
            {contacts.map(contact=>(
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets
