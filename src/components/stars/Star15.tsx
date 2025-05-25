/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsZJREFUSEuNVk1PGkEYfhZJSCB1PVTSbblhUxNKKkZpkb/AoXKo/8RUwF7s2uov8aKr/Q9dalLAWElMyrVi5KImEGPCbjOzszuzzCxxLzsMM+/zvs/zfqzmuq4L9pCF5v+Y9p56MPynRgGebBkRR4kJDZrCjgdAH3aIrXks/JZp7tJz9VodSmuKqDXHdd0oWi4vL5HL5bC5uYlUMoXtL9vUxM7ODobDIfb399HtdrG4+MaLQAUgaUAd9qJZXi7grHPmXSO3A7X41rulJXQ6bVk9ZkegyLt/dfUPxdUiRqMRbm9vuU8UgHjpkhdd0xsaMKfPIZVM4tfpKTKZTEgnjyKGRk43m02srZXV7gpGJ8EI8E/bRqn0IRSNFEH34gL5fH4qLT4Op86L5vzPOfJv2V0WewigWq3CsqwJwkVawlKITPlgG582cHBwEFAbZNH9/T10XfdxZYqeUoDszN3dHWafzVJvQhGsrKyg1W752kliBrxPASsUCmi326wiXQbAaqlcLsNu2lI6RqWpar9UKsG27aD5BBGYpolGoxGmSCJZWQ4T8Wgwza+o1Woevt+LrGMLRGT/kepKqgNV2XrSWUdH+Li+LgCw/nPdv4bx6iUvoqnCKkqbFuoVDMMIumKoFw0GA6TTaZqmvGIVtKhtU3dubgaYn3/OmeDt2sXu7jfUG3WeRaKKotGoNQCipc8/1YC3Ci+qXu8vtj5v4fDwMHA9ymFxn+i3930PC68XPO9ZZgoDh/d9xxljZiYeZJRIl9j96D7bGI/HiMViE3NlotBETcnheDyOZDIJUpmhh7k+q+sYDYcgxh3HUaZEqJJ5aOJ0AxKJBB4fH5HNZqFpGnq9Ht17eHiImqFcZHGiCV075M11v4/frRYqlQrdP/lxguLqexjGC6XXoh2pXcuDOxyNujSivxpkAMmC4otBGKveHFY4wTD/A6rJecWdWrKsAAAAAElFTkSuQmCC)
 */
export default function Star15({
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
        d="M95.713 9.378a6 6 0 0 1 8.574 0l9.515 9.717a6 6 0 0 0 6.496 1.381l12.645-5.007a6 6 0 0 1 7.833 3.487l4.74 12.748a6 6 0 0 0 5.372 3.903l13.589.57a6 6 0 0 1 5.737 6.371l-.855 13.573a6 6 0 0 0 3.321 5.752l12.182 6.046a6 6 0 0 1 2.649 8.154l-6.301 12.053a6 6 0 0 0 .694 6.604l8.67 10.479a6 6 0 0 1-.897 8.527l-10.658 8.447a6 6 0 0 0-2.052 6.316l3.657 13.099a6 6 0 0 1-4.287 7.426l-13.173 3.381a6 6 0 0 0-4.443 4.936l-1.987 13.454a6 6 0 0 1-6.936 5.04l-13.41-2.269a6 6 0 0 0-6.066 2.701l-7.287 11.483a6 6 0 0 1-8.387 1.783l-11.327-7.527a6 6 0 0 0-6.641 0l-11.328 7.527a6 6 0 0 1-8.387-1.783l-7.287-11.483a6 6 0 0 0-6.066-2.701l-13.41 2.269a6 6 0 0 1-6.936-5.04l-1.987-13.454a6 6 0 0 0-4.443-4.936l-13.173-3.381a6 6 0 0 1-4.287-7.426l3.657-13.099a6 6 0 0 0-2.052-6.316l-10.658-8.447a6 6 0 0 1-.897-8.527l8.67-10.479a6 6 0 0 0 .694-6.604l-6.301-12.053a6 6 0 0 1 2.65-8.154l12.181-6.046a6 6 0 0 0 3.32-5.752l-.854-13.573a6 6 0 0 1 5.737-6.372l13.588-.569a6 6 0 0 0 5.373-3.903l4.74-12.748a6 6 0 0 1 7.833-3.487l12.645 5.007a6 6 0 0 0 6.496-1.38z"
      />
    </svg>
  );
}
