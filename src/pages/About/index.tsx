import { useEffect } from 'react';

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <a className="text-blue-700 underline" href={to} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default function About() {
  useEffect(() => {
    document.title = 'About - Competition Groups';
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col lg:w-1/2 md:w-2/3 pt-2 w-full text-sm md:text-base p-2 md:px-0  text-gray-800 space-y-4">
        <p>Welcome to CompetitionGroups.com!</p>

        <p className="leading-relaxed">
          This purpose of this website is to show WCA competition assignments. This site can show
          competing and staff assignments for competitions with 1 room or more for 1 day or multiday
          competitions updating with all of the competition's next round assignments. This site
          simply presents the assignments *as-is* from how they are, as stored on the WCA website.
        </p>

        <p className="leading-relaxed">
          Start times and end times are taken straight from the WCIF data as generated, rounded to
          the nearest 5 minutes, and converted to the respective venue's timezones.
        </p>

        <p className="leading-relaxed">
          To get your competition's assignments to show here, you must generate them with a tool
          like <Link to="https://groupifier.jonatanklosko.com/">Groupifier</Link>,{' '}
          <Link to="https://delegate-dashboard.netlify.app/">DelegateDashboard</Link>, or{' '}
          <Link to="https://goosly.github.io/AGE/">AGE</Link>.
        </p>

        <p className="leading-relaxed">
          If you are a developer and you want to learn more about the data that is shown here, check
          out the{' '}
          <Link to="https://github.com/thewca/wcif/blob/master/specification.md">
            WCIF specification
          </Link>
          .
        </p>
        <br />
        <p className="leading-relaxed">
          People can be assigned to groups, rounds, or any arbitrary activity. If you want to get
          creative with the website, feel free to reach out to{' '}
          <Link to="https://github.com/coder13">me</Link>!
        </p>
      </div>
    </div>
  );
}
