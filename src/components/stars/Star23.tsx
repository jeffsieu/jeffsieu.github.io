/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAuxJREFUSEuNVttu2kAQPQvYpMLgSORz6pA8BTt/FC5qGsgfBcgbl35OkYKhKjbgjXZ2fdl4od0HZO1lZs7MnDMwzjkHB8DoB2fXP45L79R9ljuA9FO8qTYu+jc84mCZHZZwzoXRer2Ow+GAp6cnjEYjLSCz4+Ku/B4MBhiPx7AsC1EUkQ2JAEClwkBfDHAaTazXv2Hbdu7oQoriOMZNu43tbifvMwaeJPIzRTAYDDEaveQGGcM2DOE4TiF15ah3ux1arRZUnPS+1+tlWcgQiINmswnxQFaCo1KpENRqraZyKvqBqX7gOB5PlNpERSvRO9hut1mghSJzRPEB3+pXkGYAUZxW08XH5kN3oJ67roswDHNjjGG/38Oy7ex+AYGELxC47jWS5JQ99H0fk8lEK3wQBJhOp2qPUQ03mw2ltLi0FKUHx+MR7XY7i06gWSyX8LzvhG21XKLTuQMjrKAarNdr1Gq1Eh2MDtJbMsoZGRKdcTpJVNVqNStqGZ3eCJoDE6EWiyXu7+/IYLfrk7Ppu3AKiDPP88ytbGKygcRyi3P4QYDZ7J0cPPhdTN6mAlRG/3Nslzwonap2lNaJgMFjgBmlC3jodmXRWSoJelpyqeA50fRQciyr1QqdTkelqEsHM5Wi+XyBW+/2olCWa5BGDYbHQiuyi0V+k+Q0yImmpso2jqdim8pEz+dzQiLW6tcKt574Jhn70qamLirI8h8impvTH0CpFakmPrWwUhWSFcHqRqOhAcnETkRDUnF1RUUtkkgwtLw4rt1rbJRUCJysWsH+bwTLqql0pUVWCHKxk4GJB9E+MjJUOBSM18QOgOM0EW7DfOCk86Df7+N1PFZZlZou5VpAThW0jMMk18PhEM8/nqm7shQJsRLWBRghWEJbtIGTdkBhqKbljOMIN+0bfeCcEkpD1qYCanw4oN/v4eVnYfBoQReHdJbmbJBTFl7HsC0b+68j01BF49Z//7lQ6nCGaLpts87ors79I/kENVLNwQzEWU4AAAAASUVORK5CYII=)
 */
export default function Star23({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
  stroke?: string;
  pathClassName?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? 'currentColor'}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="M108.264 100c149.028 86.91 78.646 157.387-8.264 8.264C13.09 257.387-57.387 186.91 91.737 100-57.387 13.09 13.09-57.387 100 91.737 186.91-57.387 257.387 13.09 108.264 100"
      />
    </svg>
  );
}
