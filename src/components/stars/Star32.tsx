/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAyFJREFUSEuFVsF20kAUvUFwZ4Ir4RzBJf2C0iKubbeFdg2cUr9JqIJLC7htXYu19AckS8FzGleSdCfIeN6bSTIhoc4mw2R4d957996JIYQQ4CEgYMCgX4ZcAc+jC7E9aqv+0P9hxAD02AnzWCB1CAZO2C8BdEg9mzANnmWzWX4uFgs/vYTzR5e0DKLwjuOgtFOCPbWRy+X4pWGkZClVVZ27O5R2dmDbNp7lckEGIYRAHEC97fV6aLVaME0LrksnJgBZBB/Asix4ngfa22g0gp7p5doKQFV7nMlgtfqL0XCAo1otAjAajVCv15FOp7Fc/tlkRpCEsRZC+ES5cxx8vrxCo9ngttxOJtjb22dWifWaS2RAYC0EUikDVKmbmxuUy2Xe3+/1cHh4gFwur7IhEgY0BbKWBffeQ/pRGl/HY+yWyygWi5jP52ifttE97/LJ2u02ut0unhcKmM9mmExu8ar6EsvVCqZpYuG6QT8iAH7TPO+em1koFHB9fc3PpEHAlf0K5j/n/JqC2/ZUZqBGRAe+wobDIU5OTlQzDbUsZNrc7egSNf/jxQWOa/VQpHEA/YxSGGdnZ1yK2CAyKTAqV6fT2aqHIAMSkeu6YWoUQwv0sKJIxVKvNIi+Uox+kwWQfWrBc71gkx5QxwnnahY7hAHTMuH+XshSJluFrMCbWImi0ejX6Wkbne5b2ZiY5WzQ1D/1aPQJx8f1QLHURI3NMnWKp2pC7weDAWpHtQ0nBqTQVGT2n1KJ5U9rxPP/0rRSYZ0wTS0T0+828nnpXXyQEEDAsrIcPJ3OYDz+gvJuGcUXSmgsrnOmjy800sfsxwyT2wmq1SpWSmgRsuhKpgwury7RJOOCgQlbxR570JqtIjS7VCrFNfrGVrHL+/v9Pg4OXm8TWpyIGTa7FUh4tQfNbhm//Djchl2HJBDo9z+g2WrCfBJ6S6Jd33t4/66HZpOy1oa66RKtgpAd5xc3fDqdIp+X7mikoveBTwq6cPxLabMOcYAELvtL0Stzm7b1jwcRpakqG39JhF8Paq5e6uu6s+nl1UW39dKP2aKKkJDggx8A/wAIpdbEnf2r6wAAAABJRU5ErkJggg==)
 */
export default function Star32({
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
				d="M100 5a9.5 9.5 0 0 0-9.5 9.5v50.045l-25.023-43.34A9.5 9.5 0 0 0 52.5 17.728a9.5 9.5 0 0 0-3.477 12.977l25.023 43.34-43.341-25.022a9.5 9.5 0 0 0-9.5 16.454L64.545 90.5H14.5A9.5 9.5 0 0 0 5 100a9.5 9.5 0 0 0 9.5 9.5h50.046l-43.341 25.023a9.5 9.5 0 0 0-3.477 12.977 9.5 9.5 0 0 0 12.977 3.477l43.34-25.023-25.022 43.341a9.5 9.5 0 0 0 3.477 12.977 9.5 9.5 0 0 0 12.977-3.477L90.5 135.454V185.5a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5v-50.046l25.023 43.341a9.5 9.5 0 0 0 12.977 3.477 9.5 9.5 0 0 0 3.477-12.977l-25.023-43.341 43.341 25.023a9.5 9.5 0 0 0 12.977-3.477 9.5 9.5 0 0 0-3.477-12.977L135.454 109.5H185.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5h-50.046l43.341-25.023a9.5 9.5 0 0 0 3.477-12.977c-2.623-4.544-8.433-6.1-12.977-3.477l-43.341 25.023 25.023-43.341a9.5 9.5 0 0 0-3.477-12.977 9.5 9.5 0 0 0-12.977 3.477L109.5 64.545V14.5A9.5 9.5 0 0 0 100 5"
				clipRule="evenodd"
				fillRule="evenodd"
			/>
		</svg>
	);
}
