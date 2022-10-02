import styles from "../styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const RecommendationTile = ({position, title, author, publicationYear, children, cover}) => (
  <div className='mb-24 mx-4 md:mx-0 relative'>
    <div className='flex flex-col md:flex-row items-left md:items-center'>
      <div className='w-4/5'>
        <img src={cover} className='w-100 drop-shadow-2xl blur-xxs' />
      </div>
      <div className='absolute top-1/3 md:top-56 book-title'>
        <p className='text-3xl md:text-5xl font-gothic font-bold mt-2 md:mt-0 text-black break-words'>
        {title}
        </p>

        <p className='text-base font-sans font-normal mt-1'>
          {author}, {publicationYear}
        </p>

        <p className='mt-4 text-sm ml-8 text-right hidden'>
          {children}
        </p>
      </div>
    </div>
  </div>
)

export default function Index() {
  return (
    <div className='bg-ocean v-full h-full flex py-12 items-center flex-col'>
      <p className='text-4xl flex text-center font-gothic'>
        <span className='text-2xl mr-4'>🚩</span> Kasra's Red Flag List <span className='text-2xl ml-4'>🚩</span>
      </p>
      
      <p className='text-l max-w-sm md:max-w-prose text-center my-12'>
        Hi. Here is a list of my favorite books, which I also consider extremely big red flags if someone else says they're their favorite books.
      </p>

      <div className='max-w-2xl'>
        <RecommendationTile
          position={1}
          title={'The Rebel: An Essay on Man in Revolt'}
          author={'Albert Camus'}
          publicationYear={1951}
          cover={'https://i.imgur.com/ohjK97K.jpg'}
        >
          This is less a book and more of a textbook, it contains the main thesis that sets the tone for Camus' novels. It goes over every example of rebellion starting with Prometheus and examines their structure and purpose. 
        </RecommendationTile>

        <RecommendationTile
          position={2}
          title={'The Nick Adams Stories'}
          author={'Ernest Hemingway'}
          publicationYear={1966}
          cover={'https://i.imgur.com/Gb1NSat.jpg'}
        >
          A series of Hemingway short stories, some throw-away and some nuggets that were later refined in his other books. What I appreciate about this set is that the stories mostly focus on younger people compared than his novels.
        </RecommendationTile>

        <RecommendationTile
          position={3}
          title={'Demian'}
          author={'Herman Hesse'}
          publicationYear={1919}
          cover={'https://i.imgur.com/xnHgOCi.png'}
        >
          In the same vein as why I appreciate the previous book, Demian is the ideal bildungsroman. Originally published anonymously, it's the outcome of Hesse spending a lot of time with Carl Jung. A very fun book that I come back to every time I feel like I'm "coming of age" (which is a lot.)
        </RecommendationTile>

        <RecommendationTile
          position={4}
          title={'Exile and the Kingdom'}
          author={'Albert Camus'}
          publicationYear={1957}
          cover={'https://i.imgur.com/zXRFDKs.png'}
        >
          PSYCH! We're back on Camus! You thought it was over!
          <br /><br />
          Unlike The Rebel which is as plain and direct as a book can be these stories are more dreamlike and ephemeral. You have to dig in to understand the message instead of being entranced by the paintings he creates with his words.
        </RecommendationTile>
      </div>

    </div>
  );
}
