import { allSkills, Skill } from '@/data/skills';

export default function SkillChip({ skill }: { skill: Skill }) {
  const skillDetails = allSkills[skill] ?? null;
  if (!skillDetails) return null;
  const { icon: Icon, title } = skillDetails;

  return (
    <li className="flex gap-2 items-center rounded px-1.5 py-0.5 text-sm dark:text-neutral-300 text-neutral-700 font-medium dark:bg-black/20 bg-black/10">
      {Icon && <Icon />}
      <span>{title}</span>
    </li>
  );
}
