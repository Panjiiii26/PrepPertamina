const q = (pertanyaan, pilihan, jawaban, pembahasan) => ({
  pertanyaan,
  pilihan,
  jawaban,
  pembahasan,
});

const english = [
  q(
    'Choose the synonym of "assist".',
    ["Delay", "Help", "Ignore", "Prevent"],
    1,
    'Assist means "help".'
  ),
  q(
    'Choose the antonym of "increase".',
    ["Reduce", "Rise", "Add", "Improve"],
    0,
    'The opposite of increase is reduce.'
  ),
  q(
    'The synonym of "reliable" is ...',
    ["Trustworthy", "Dangerous", "Weak", "Doubtful"],
    0,
    'Reliable means trustworthy.'
  ),
  q(
    'The antonym of "success" is ...',
    ["Achievement", "Failure", "Progress", "Victory"],
    1,
    'The opposite of success is failure.'
  ),
  q(
    'Choose the synonym of "rapid".',
    ["Slow", "Fast", "Lazy", "Late"],
    1,
    'Rapid means fast.'
  ),
  q(
    'The antonym of "optimistic" is ...',
    ["Confident", "Positive", "Hopeful", "Pessimistic"],
    3,
    'The opposite of optimistic is pessimistic.'
  ),
  q(
    '"Expand" is closest in meaning to ...',
    ["Shrink", "Grow", "Limit", "Cut"],
    1,
    'Expand means grow or become larger.'
  ),
  q(
    'The opposite of "frequent" is ...',
    ["Rare", "Common", "Regular", "Often"],
    0,
    'Frequent means often; its opposite is rare.'
  ),
  q(
    'Choose the synonym of "achieve".',
    ["Fail", "Accomplish", "Miss", "Lose"],
    1,
    'Achieve means accomplish.'
  ),
  q(
    'The antonym of "strong" is ...',
    ["Weak", "Firm", "Solid", "Tough"],
    0,
    'The opposite of strong is weak.'
  ),
  q(
    '"Essential" is closest in meaning to ...',
    ["Important", "Unnecessary", "Ordinary", "Optional"],
    0,
    'Essential means very important or necessary.'
  ),
  q(
    'The antonym of "difficult" is ...',
    ["Hard", "Simple", "Tough", "Complicated"],
    1,
    'The opposite of difficult is simple or easy.'
  ),
  q(
    'The synonym of "maintain" is ...',
    ["Destroy", "Keep", "Break", "Stop"],
    1,
    'Maintain means keep or preserve.'
  ),
  q(
    'The antonym of "ancient" is ...',
    ["Old", "Traditional", "Modern", "Historic"],
    2,
    'The opposite of ancient is modern.'
  ),
  q(
    'Choose the synonym of "begin".',
    ["End", "Start", "Finish", "Close"],
    1,
    'Begin means start.'
  ),
  q(
    'The antonym of "safe" is ...',
    ["Secure", "Dangerous", "Guarded", "Protected"],
    1,
    'The opposite of safe is dangerous.'
  ),
  q(
    'The synonym of "huge" is ...',
    ["Tiny", "Large", "Small", "Little"],
    1,
    'Huge means very large.'
  ),
  q(
    'The antonym of "cheap" is ...',
    ["Expensive", "Low", "Simple", "Easy"],
    0,
    'The opposite of cheap is expensive.'
  ),
  q(
    '"Construct" has the closest meaning to ...',
    ["Build", "Break", "Destroy", "Cut"],
    0,
    'Construct means build.'
  ),
  q(
    'The antonym of "accept" is ...',
    ["Receive", "Welcome", "Refuse", "Admit"],
    2,
    'The opposite of accept is refuse.'
  ),
];

export default english;