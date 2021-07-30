import Camus from '../public/images/writers/camus.jpg';
import Kafka from '../public/images/writers/kafka.png';
import Kundera from '../public/images/writers/kundera.png';
import Sartre from '../public/images/writers/Sartre.png';
import Harper from '../public/images/writers/harper.png';

import Albert from '../public/images/profiles/albert.png';
import Franz from '../public/images/profiles/franz.png';
import Jean from '../public/images/profiles/jean.png';
import Milan from '../public/images/profiles/milan.png';
import Lee from '../public/images/profiles/lee.png';
import StoryCard from './StoryCard';

const stories=[
    {
        name:'Albert Camus',
        src:Camus,
        profile:Albert
    },
    {
        name:'Franz Kafka',
        src:Kafka,
        profile:Franz
    },
    {
        name:'Milan Kundera',
        src:Kundera,
        profile:Milan
    },
    {
        name:'Jean Paul Sartre',
        src:Sartre,
        profile:Jean
    },
    {
        name:'Harper Lee',
        src:Harper,
        profile:Lee
    }
]

function Stories() {
    return (
        <div className='flex justify-center space-x-3 mx-auto'>
            {stories.map((story)=>(
                <StoryCard 
                key={story.name} 
                name={story.name} 
                src={story.src} 
                profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
