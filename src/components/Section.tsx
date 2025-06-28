export const pageSections = [
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];

type PageSection = (typeof pageSections)[number];

export default function Section<S extends PageSection>({
  id,
  title,
  children,
  stars,
  titleClassName,
}: {
  id: S['id'];
  title: S['label'];
  children: React.ReactNode;
  stars?: React.ReactNode;
  titleClassName?: string;
}) {
  return (
    <section className="flex flex-col gap-8 m-4 sm:m-8">
      <h2
        id={id}
        className="text-5xl font-medium self-center scroll-mt-8 font-['Changa_One'] relative"
      >
        <span className={titleClassName}>{title}</span>
        {stars}
      </h2>
      <div className="xl:max-w-screen-2xl w-full self-center">{children}</div>
    </section>
  );
}
