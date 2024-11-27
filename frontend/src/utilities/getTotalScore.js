export default function getTotalScore(results) {
	return results.reduce((score, item) => {
		return score + item.totalScore;
	}, 0);
}
