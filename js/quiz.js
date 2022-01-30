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

const levels2 = [
	{
		ratio: 0.85,
		title: 'Докторантура',
		desc: 'Ваши аналитические способности говорят о том, что вы доктор наук!',
	},
	{
		ratio: 0.7,
		title: 'Аспирантура',
		desc: 'Ваши аналитические способности говорят о том, что у вас высокопрофессиональное образование!',
	},
	{
		ratio: 0.5,
		title: 'Бакалавриат',
		desc: 'У вас высшее профессиональное образование',
	},
	{
		ratio: 0.2,
		title: 'Средняя школа',
		desc: 'У вас среднее полное образование',
	},
	{
		ratio: 0.0,
		title: 'Неполное среднее образование',
		desc: 'Вы окончили 9 классов в средней школе',
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
	{
		id: 5,
		title: 'Сколько будет 2-3*2+2/2+2=?',
		variants: [
			{
				bonus: 0,
				text: '0',
			},
			{
				bonus: 3,
				isMax: true,
				text: '1',
			},
			{
				bonus: 0,
				text: '2',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 6,
		title: 'Сколько будет 1/4*2 - 1/4*1=?',
		variants: [
			{
				bonus: 4,
				isMax: true,
				text: '0,25',
			},
			{
				bonus: 0,
				text: '1',
			},
			{
				bonus: 0,
				text: '0,5',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 7,
		title:
			'На встречу пришли 5 человек. Каждый здоровается друг с другом по одному разу. Сколько рукопожатий будет в сумме?',
		variants: [
			{
				bonus: 0,
				text: '8',
			},
			{
				bonus: 0,
				text: '9',
			},
			{
				bonus: 5,
				isMax: true,
				text: '10',
			},
			{
				bonus: 0,
				text: '12',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 8,
		title: 'Какое число должно быть вместо знака вопроса?  1-2-4-9-16-25-36-49-?',
		variants: [
			{
				bonus: 6,
				isMax: true,
				text: '64',
			},
			{
				bonus: 0,
				text: '81',
			},
			{
				bonus: 0,
				text: '75',
			},

			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 9,
		title:
			'В наличии есть 5 кубов одного размера. Cколько еще кубов одного размера потребуется для создания одного большого куба?',
		variants: [
			{
				bonus: 0,
				text: '3',
			},
			{
				bonus: 0,
				text: '4',
			},
			{
				bonus: 0,
				text: '11',
			},
			{
				bonus: 7,
				isMax: true,
				text: '22',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 10,
		title: 'Сколько будет 2017*2017 - 2017 - 2016*2017 = ?',
		variants: [
			{
				bonus: 4,
				isMax: true,
				text: '0',
			},
			{
				bonus: 0,
				text: '1',
			},
			{
				bonus: 0,
				text: '2016',
			},
			{
				bonus: 0,
				text: '2017',
			},

			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 11,
		title: 'Какое утверждение о числе "Пи" неверное?',
		variants: [
			{
				bonus: 6,
				isMax: true,
				text: 'Рациональное число',
			},
			{
				bonus: 0,
				text: 'Иррациональное число',
			},
			{
				bonus: 0,
				text: 'Натуральное число',
			},
			{
				bonus: 0,
				text: 'Положительное число',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 12,
		title:
			'Чему равна разность суммы внутренних углов пятиугольника и суммы внутренних углов четырехугольника?',
		variants: [
			{
				bonus: 0,
				text: '120',
			},
			{
				bonus: 7,
				isMax: true,
				text: '180',
			},
			{
				bonus: 0,
				text: '90',
			},

			{
				bonus: 0,
				text: '270',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 13,
		title: 'Какое расстояние между точками A(0,0) и B(3,4) в системе координат?',
		variants: [
			{
				bonus: 0,
				text: '3',
			},

			{
				bonus: 0,
				text: '4',
			},

			{
				bonus: 0,
				text: '12',
			},
			{
				bonus: 5,
				isMax: true,
				text: '5',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 14,
		title: 'Сколько существует двузначных чисел, в записи которых нет цифры 0?',
		variants: [
			{
				bonus: 0,
				text: '82',
			},

			{
				bonus: 0,
				text: '90',
			},
			{
				bonus: 10,
				isMax: true,
				text: '81',
			},
			{
				bonus: 0,
				text: '80',
			},
			{
				bonus: 0,
				text: 'Не знаю',
			},
		],
	},
	{
		id: 15,
		title: 'Сколько миллиметров в одном метре?',
		variants: [
			{
				bonus: 0,
				text: '100',
			},
			{
				bonus: 5,
				isMax: true,
				text: '1000',
			},
			{
				bonus: 0,
				text: '10000',
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
		const lvl = levels2.find((el) => ratio >= el.ratio);

		console.log('END ratio :', ratio);

		_quiz.innerHTML = `
    <p>Вы набрали ${sumBonus} баллов из ${maxBonus}</p>
    <p>Правильно ${countCorrect} баллов из ${questions.length}</p>
    <h3 class='title'>${lvl.title}</h3>
		<h4>${lvl.desc}</h4>
    
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
