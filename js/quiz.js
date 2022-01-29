const Levels = [
	{
		ratio: 0.8,
		title: 'Потрясающе! Вы отлично знаете математику',
	},
	{
		ratio: 0.5,
		title: 'Молодцы! Вы хорошо знаете математику',
	},
	{
		ratio: 0.3,
		title: 'Есть небольшие знания в алгебре',
	},
	{
		ratio: 0.0,
		title: 'По итогам вопросов, вы скорее всего очень плохо знаете алгебру',
	},
];

const questions = [
	{
		id: 1,
		title:
			'Чему равна площадь прямоугольного треугольника, при катете А - 5 см, и катете В - 8 см?',
		variants: [
			{
				bonus: 0,
				text: '30 см<sup>2</sup> ',
			},
			{
				bonus: 4,
				isMax: true,
				text: '20 см<sup>2</sup>',
			},
			{
				bonus: 0,
				text: '15 см<sup>2</sup>',
			},
			{
				bonus: 0,
				text: '13 см<sup>2</sup>',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 2,
		title: 'Выберите правильную теорему Пифагора',
		variants: [
			{
				bonus: 0,
				text: 'a<sup>2</sup> * b<sup>2</sup> = c<sup>c</sup>',
			},
			{
				bonus: 5,
				isMax: true,
				text: 'a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>',
			},
			{
				bonus: 0,
				text: 'a<sup>2</sup> + b<sup>2</sup> = c<sup>c</sup>',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 3,
		title: 'Сколько будет log<sub>3</sub>64 = ?',
		variants: [
			{
				bonus: 0,
				text: 'log<sub>3</sub>64 = 7',
			},
			{
				bonus: 0,
				text: 'log<sub>3</sub>64 = 3',
			},
			{
				bonus: 0,
				text: 'log<sub>3</sub>64 = 8',
			},
			{
				bonus: 7,
				isMax: true,
				text: 'log<sub>3</sub>64 = 4',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 4,
		title: 'Выберите правильную формалу Квадрата суммы',
		variants: [
			{
				bonus: 0,
				text: '(a<sup>2</sup>  + b<sup>2</sup> )<sup>2</sup> = a<sup>2</sup> + 2a<sup>2</sup>b<sup>2</sup> + 2b<sup>2</sup>',
			},
			{
				bonus: 0,
				text: '(a<sup>2</sup>  + b<sup>2</sup> ) = a<sup>2</sup> + 2ab + b<sup>2</sup>',
			},
			{
				bonus: 6,
				isMax: true,
				text: '(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
];

const _quiz = document.querySelector('.quiz');

function init() {
	console.log('init quiz');
	const _count = _quiz.querySelector('.count');
	const _countLength = _quiz.querySelector('.count-length');
	const _question = _quiz.querySelector('.quiz__question');
	const _quizAnswers = _quiz.querySelector('.quiz__answers');
	const _step = _quiz.querySelector('.quiz__btn .btn');

	let currentCount = 0;
	// текущий счет бонусов
	let sumBonus = 0;
	//  количество правильныъ отвов
	let countCorrect = 0;
	// Максимальное количество бонусов
	let maxBonus = questions.reduce((acc, curr) => {
		const max = curr.variants.find((el) => (el.isMax ? true : false));
		acc += max.bonus;
		return acc;
	}, 0);

	console.log('Max: ', maxBonus);
	// записываем

	_step.addEventListener('click', next);

	next();

	function next() {
		currentCount += 1;

		// Считаю бонусы за ответ за прошлый вопрос
		const arrAnswers = _quizAnswers.querySelectorAll('.quiz__answer input');
		if (arrAnswers.length > 0) {
			arrAnswers.forEach((el) => {
				if (el.checked) {
					sumBonus += +el.value;
					console.log('верный? - ', Boolean(el.getAttribute('data-max')));
					if (Boolean(el.getAttribute('data-max'))) {
						countCorrect += 1;
					}
				}
			});
		}

		console.log('sumBonus: ', sumBonus);
		console.log('curr count: ', currentCount);

		if (currentCount > questions.length) {
			end();
			return;
		}

		const { title, variants } = questions[currentCount - 1];

		_count.textContent = currentCount; /* текущий вопрос */
		_countLength.textContent = questions.length; /* максимум вопросов */
		_question.innerHTML = title; /* Вопрос */
		_quizAnswers.innerHTML = ''; /* Очистка ответов */

		// добавляем ответы в список вариантов
		variants.forEach((variant, id) => {
			const { text, bonus, isMax } = variant;
			_quizAnswers.appendChild(templateAnswer(text, bonus, isMax, id));
		});
	}

	// итоги опроса
	function end() {
		const ratio = sumBonus / maxBonus;
		const lvl = Levels.find((el) => ratio >= el.ratio);

		console.log('END ratio :', ratio);

		_quiz.innerHTML = `
    <p>Вы набрали ${sumBonus} баллов из ${maxBonus}</p>
    <p>Правильно ${countCorrect} баллов из ${questions.length}</p>
    <h3>${lvl.title}</h3>
    
    `;
	}
}

const templateAnswer = (text, bonus, isMax, id) => {
	const templ = `<label
   class="quiz__answer"
   for="answ-${id}"><input id='answ-${id}' ${
		isMax ? 'data-max="true"' : ''
	} type='radio' name='answer' value='${bonus}' /><span>${text}</span></label>`;
	const div = document.createElement('div');
	div.innerHTML = templ;

	return div;
};

init();
