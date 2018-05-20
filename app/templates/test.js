import {h, renderToString, Color} from 'ink';
import importJsx from 'import-jsx';
import test from 'ava';

const Ui = importJsx('./ui');

test('output', t => {
	const actual = renderToString(<Ui/>);
	const expected = renderToString(<Color green>I love Ink</Color>);

	t.is(actual, expected);
});
