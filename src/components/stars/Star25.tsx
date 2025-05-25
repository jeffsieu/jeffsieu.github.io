/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqVJREFUSEuFVm2SmkAQfayIOUE8h55gozmBmiNsrOif4MfmDuripipS2fIKQi4QNReIew72BioyqRlmoEcYM38YoJnX3a/7NRZjjIEBsPjFgoVbSxiWGJi/tQSAWCYj+Vw6IQAkTjmc/tQIQM3c0Qi+v8LpeBKuODUHw8EAnrcsjSaPkoEAFG25707VQRzHJQdZsO0KTqcTLEumrSQyLQKKzPfj8Vh6KbNYAjOZTDCfz1XWZLIFpeI4K2GMldMGtFst7Pd/BD9qcdv0Lt212i1sf281gNwPJgFK2OKPwiBAr/cJliiA65UCBEGATqdjAOCR0CpiwOO3Rxz+HjAcDsWHlUoFSZIoh6XfKdjd3R0ulwuCIMRq9QONRgOLxSLlREuRvKlWqxqh/ICXl594ePgsAfIEcYD1eo1+vy8cUG9s28b5fM5TqiJwXRffn59LUgHU63VEbxGlQjx7i6LS1LnuV3ielzKlSK7VaqLktCXc0r2m702vHcfB8XjUAXje6FGmfQ5wGziRApFFkDWLSYoK55kBhPAkLO0DJXa1d6YUlTaxxse1hZYiRfJoNMJyqbSFp0vVvoV6/T2iKMqaix+YkVwSWU6y0iKplFx3zkR3tDItsEvLlB+QpsSu0DJVnSw/5j03mU7wengVjdbtdvNGkzbUYdFo8QXhrwCrlY9ms4nZbJaLX1amVCrIPgxDdLs9okXF2tpsNsIROi60YHOpyLo7e9/+2MZuuyP2lJu0ue/vP2C33xEt0geXNg+uNW86nQptobVPyed7PoyenrjNlSbLkIwDR6gnY+Ald4njrKFpkqq2jaMcOLlz+tTJ+iCbEDSB0pbrlO/7mZTwkTn4MoC3XP73JyHt5ALJdNCbWptypieX3hU5uPnHoOq5+JtjKET8A698kMLDQ6x8AAAAAElFTkSuQmCC)
 */
export default function Star25({
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
        d="M118.05 118.05c102.6 102.6-138.7 102.6-36.1 0-102.6 102.6-102.6-138.7 0-36.1-102.6-102.6 138.7-102.6 36.1 0 102.6-102.6 102.6 138.7 0 36.1"
      />
    </svg>
  );
}
