
const RecommendationTile = ({position, title, author, publicationYear, children}) => (
  <div className='mb-24 mx-4 md:mx-0 relative'>
    <div className='flex flex-col md:flex-row items-left md:items-center'>
      <div className='w-4/5'>
        <img src='https://i.imgur.com/ohjK97K.jpg' className='w-100 drop-shadow-2xl' />
      </div>
      <div className='absolute w-4/5 pr-0 md:pr-14 top-1/3 md:top-56 left-16 md:left-1/4'>
        <p className='text-3xl md:text-5xl font-gothic font-bold mt-2 md:mt-0 text-black break-words'>
        {title}
        </p>
        {/*
        <p className='text-base font-sans font-normal mt-1'>
          {author}, {publicationYear}
        </p>
        */}
        <p className='mt-4 text-base max-w-prose text-justify hidden'>
          {children}
        </p>
      </div>
    </div>
  </div>
)

export default function Index() {
  return (
    <div className='bg-ocean v-full h-full flex py-12 items-center flex-col'>
      <p className='text-4xl flex'>
        <span className='text-2xl mr-4'>🚩</span> Kasra's Red Flag List <span className='text-2xl ml-4'>🚩</span>
      </p>
      
      <p className='text-l max-w-sm md:max-w-prose text-center md:text-left my-12'>
        Hi all! the following is a list of my favorite books, which I also consider extremely big red flags if someone else says they're their favorite books.
      </p>

      <div className='max-w-2xl'>
        <RecommendationTile
          position={1}
          title={'The Rebel: An Essay on Man in Revolt'}
          author={'Albert Camus'}
          publicationYear={1951}
        >
          This is less a book and more of a textbook, it contains the main thesis that sets the tone for Camus' novels. It goes over every example of rebellion starting with Prometheus and examines their structure and purpose. 
        </RecommendationTile>

        <RecommendationTile
          position={2}
          title={'The Nick Adams Stories'}
          author={'Ernest Hemingway'}
          publicationYear={1966}
        >
          A series of Hemingway short stories, some throw-away and some nuggets that were later refined in his other books. What I appreciate about this set is that the stories mostly focus on younger people compared than his novels.
        </RecommendationTile>

        <RecommendationTile
          position={3}
          title={'Demian'}
          author={'Herman Hesse'}
          publicationYear={1919}
        >
          In the same vein as why I appreciate the previous book, Demian is the ideal bildungsroman. Originally published anonymously, it's the outcome of Hesse spending a lot of time with Carl Jung. A very fun book that I come back to every time I feel like I'm "coming of age" (which is a lot.)
        </RecommendationTile>

        <RecommendationTile
          position={4}
          title={'Exile and the Kingdom'}
          author={'Albert Camus'}
          publicationYear={1957}
        >
          PSYCH! We're back on Camus! You thought it was over!
          <br /><br />
          Unlike The Rebel which is as plain and direct as a book can be these stories are more dreamlike and ephemeral. You have to dig in to understand the message instead of being entranced by the paintings he creates with his words.
        </RecommendationTile>
      </div>

    </div>
  );
}
