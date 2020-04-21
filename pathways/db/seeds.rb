# rubocop:disable Metrics/LineLength
QUESTIONS = [
  {
    slug: 'violence',
    text: 'Has the physical violence increased in severity or frequency over the past year?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  }, {
    slug: 'gun',
    text: 'Does he/she own a gun?',
    answers: [{text: 'Yes', score: 5}, {text: 'No', score: 0}]
  },
  {
    slug: 'escape',
    text: 'Have you left him/her after living together during the past year?',
    answers: [{text: 'Yes', score: 4}, {text: 'No', score: 0}, {text: "I've have never lived with him/her.", score: - 3}]
  },
  {
    slug: 'unemployment',
    text: 'Is he/she unemployed?',
    answers: [{text: 'Yes', score: 4}, {text: 'No', score: 0}]
  },
  {
    slug: 'weapon',
    text: 'Has he/she ever used a weapon against you or threatened you with a weapon?',
    answers: [{text: 'Yes', score: 3}, {text: 'No', score: 0}]
  },
  {
    slug: 'threat',
    text: 'Does he/she threaten to kill you?',
    answers: [{text: 'Yes', score: 3}, {text: 'No', score: 0}]
  },
  {
    slug: 'arrest',
    text: 'Has he/she avoided being arrested for domestic violence?',
    answers: [{text: 'Yes', score: 3}, {text: 'No', score: 0}]
  },
  {
    slug: 'paternity',
    text: 'Do you have a child that is not his/hers?',
    answers: [{text: 'Yes', score: 2}, {text: 'No', score: 0}]
  },
  {
    slug: 'rape',
    text: 'Has he/she ever forced you to have sex when you did not wish to do so?',
    answers: [{text: 'Yes', score: 2}, {text: 'No', score: 0}]
  },
  {
    slug: 'strangulation',
    text: 'Does he/she ever try to choke/strangle you or cut off your breathing?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'drugs',
    text: 'Does he/she use illegal drugs? By drugs, I mean "uppers" or amphetamines, "meth", speed, angel dust, cocaine, "crack", street drugs or mixtures.',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'alcohol',
    text: 'Is he/she an alcoholic or problem drinker?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'control',
    text: 'Does he/she control most or all of your daily activities? For instance: does he/she tell you who you can be friends with, when you can see your family, how much money you can use, or when you can take the car?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'jealousy',
    text: "Is he/she violently and constantly jealous of you? (For instance, does he/she say 'If I can't have you, no one can.'')",
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'beating',
    text: 'Have you ever been beaten by him/her while you were pregnant?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'suicide',
    text: 'Has he/she ever threatened or tried to commit suicide?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'children',
    text: 'Does he/she threaten to harm your children?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'killing',
    text: 'Do you believe he/she is capable of killing you?',
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  },
  {
    slug: 'spying',
    text: "Does he/she follow or spy on you, leave threatening notes or messages, destroy your property, or call you when you don't want him/her to?",
    answers: [{text: 'Yes', score: 1}, {text: 'No', score: 0}]
  }
].freeze
# rubocop:enable Metrics/LineLength

QUESTIONS.each_with_index do |q, _i|
  question = Question.where(slug: q[:slug]).first_or_initialize
  question.update(
    text: q[:text],
    answers: q[:answers]
  )
end
