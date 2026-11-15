import { DataSet, englishDataset, parseRawPattern } from "obscenity";

// Not necessarily inappropriate, but in certain contexts can be part of NSFW posts. Sorry lads.
const BAD_WORDS = [
	"ai",
];

const badWordsDataset = new DataSet<{ originalWord: string }>().addAll(
	englishDataset,
);
for (const word of BAD_WORDS) {
	badWordsDataset.addPhrase((phrase) =>
		phrase.addPattern(parseRawPattern("|" + word + "|")),
	);
}

export default badWordsDataset;
