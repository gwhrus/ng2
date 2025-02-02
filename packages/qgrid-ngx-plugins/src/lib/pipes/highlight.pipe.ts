import { Pipe, PipeTransform } from '@angular/core';
import { escapeRegexp, GRID_PREFIX, htmlEncode } from '@qgrid/core';


@Pipe({
	name: 'qGridHighlight'
})
export class HighlightPipe implements PipeTransform {
	transform(text: string | number, search: string | number): string {
		if ((text || text === 0) && (search || search === 0)) {
			text = text.toString();
			search = search.toString();

			const contains = new RegExp(escapeRegexp(search), 'gi');
			if (contains.test(text)) {
				return text.replace(contains,
					s => `<span class="${GRID_PREFIX}-highlight-part">${htmlEncode(s)}</span>`
				);
			}

			const contained = new RegExp(escapeRegexp(text), 'gi');
			if (contained.test(search)) {
				return `<span class="${GRID_PREFIX}-highlight-part">${htmlEncode(text)}</span>`;
			}
		}

		return htmlEncode(text as string);
	}
}
