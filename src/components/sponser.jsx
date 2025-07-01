import Marquee from 'react-fast-marquee';

const sponsors = [
  'HTML',
  'CSS',
  'Javascript',
  'Git',
  'Github',
  'React',
  'Tailwind',
  'Wordpress',
];

const SponsorMarquee = () => {
  return (
    <div className="bg-[#17232d] py-6 z-10 relative">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex items-center gap-9 px-4">
            {sponsors.map((name, index) => (
            <div
                key={index}
                className="mx-6 px-4 text-beige text-[1.5rem] font-medium overflow-hidden"
            >
                {name}
            </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SponsorMarquee;
