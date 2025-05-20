/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgNJREFUSEulVm12gyAQHHqWNNeIvUZ6k8YIi7E3aXKM2mtUe5XQB6wIERL7yp8oWXaY2S+FMcbAABCYflBeGUPecmfiZ3YiHMB/1t3LGYirMUY4o9jSkhLJ1qlt0TSNu8rpdMLh8OZp88oTMSgyiA+M44jn7bOXgNcwDNhsNsG9u1BGiYhB5iosLOkWSkkHYJ1YHCIKjO4pnDCYlUqjZZ0ppZyfCcC+N1IGGRcg7GIJsCBiQEpDaQWYyT0coJTyYcJ5gEV6pSEj0oHBREPJNQC5IMcZxffTiiAplUgqgpJNuXgSifhlGEdczmekpSHQ95/o+95FQMATrqoX7Kpdkjn23/3rPsmuEIOue0ddH4Kms9rzUxzksvgCrSbUx6NXcyo08eTzOFfWJbAY5PasVyGKgRBPnj5blsCSXC3QsGev3IE8AwBt1AqCFDGKe55jkJWL7V0reTu4oonqwGAYf3D5OHMY56r66nt8uiDPywa5qnbJ3t0gB8u057lbaCJIruS5DgjyYZre1EGp3uJWMV3kYSWz4Yp5YKBJBwYcCtcmbDU/6gJJDBZjjSmtZpAZCisYAFpbBr5dT4tIoWl4bxpW3N7jQVRo12mC2xayjQeOAIbveOCU6vrORLs90nUd6rp227rVONbHSP7y5F81MjPMb/B5hi8M/8AgyZbFRwLjZYj8AhkTWb5ydi0dAAAAAElFTkSuQmCC)
 */
export default function Star19({
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
				d="M100 5C86.883 5 76.25 15.633 76.25 28.75v47.5h-47.5C15.633 76.25 5 86.883 5 100s10.633 23.75 23.75 23.75h47.5v47.5C76.25 184.367 86.883 195 100 195s23.75-10.633 23.75-23.75v-47.5h47.5c13.117 0 23.75-10.633 23.75-23.75s-10.633-23.75-23.75-23.75h-47.5v-47.5C123.75 15.633 113.117 5 100 5"
				clipRule="evenodd"
				fillRule="evenodd"
			/>
		</svg>
	);
}
