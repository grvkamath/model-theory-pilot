// data for all stimuli in the form of a list of JavaScript objects
// load the data from the file stimuli.json

var all_stims = [{"concept": "social media", "category": "Material Culture", "id": "0001_social media"}, {"concept": "death", "category": "Religion", "id": "0001_death"}, {"concept": "grandparents", "category": "Social Capital Organizational Membership", "id": "0005_grandparents"}, {"concept": "divorce", "category": "Moral Discipline and Social Values", "id": "0011_divorce"}, {"concept": "masculinity", "category": "Moral Discipline and Social Values", "id": "0016_masculinity"}, {"concept": "rich person", "category": "Economy", "id": "0000_rich person"}, {"concept": "government", "category": "Social Capital Organizational Membership", "id": "0006_government"}, {"concept": "protest", "category": "Social Capital Organizational Membership", "id": "0009_protest"}, {"concept": "doctor", "category": "Health", "id": "0003_doctor"}, {"concept": "intelligent person", "category": "Education", "id": "0001_intelligent person"}, {"concept": "cheating", "category": "Moral Discipline and Social Values", "id": "0009_cheating"}, {"concept": "art", "category": "Aesthetics", "id": "0001_art"}, {"concept": "healthcare", "category": "Health", "id": "0001_healthcare"}, {"concept": "public transport", "category": "Material Culture", "id": "0000_public transport"}, {"concept": "mental health", "category": "Health", "id": "0000_mental health"}, {"concept": "peace", "category": "Security", "id": "0004_peace"}, {"concept": "immigrants", "category": "Moral Discipline and Social Values", "id": "0003_immigrants"}, {"concept": "poor person", "category": "Economy", "id": "0001_poor person"}, {"concept": "mother", "category": "Social Capital Organizational Membership", "id": "0002_mother"}, {"concept": "homosexuality", "category": "Moral Discipline and Social Values", "id": "0004_homosexuality"}, {"concept": "priest/spiritual leader", "category": "Religion", "id": "0007_priest/spiritual leader"}, {"concept": "abortion", "category": "Moral Discipline and Social Values", "id": "0010_abortion"}, {"concept": "terrorism", "category": "Security", "id": "0001_terrorism"}, {"concept": "god", "category": "Religion", "id": "0000_god"}, {"concept": "crime", "category": "Security", "id": "0002_crime"}, {"concept": "hell", "category": "Religion", "id": "0002_hell"}, {"concept": "independence", "category": "Moral Discipline and Social Values", "id": "0000_independence"}, {"concept": "angry", "category": "Personality Characteristics and Emotions", "id": "0000_angry"}, {"concept": "heaven", "category": "Religion", "id": "0003_heaven"}, {"concept": "neighborhood", "category": "Social Capital Organizational Membership", "id": "0003_neighborhood"}, {"concept": "university", "category": "Education", "id": "0000_university"}, {"concept": "pray", "category": "Religion", "id": "0006_pray"}, {"concept": "family", "category": "Social Capital Organizational Membership", "id": "0000_family"}, {"concept": "wedding", "category": "Religion", "id": "0004_wedding"}, {"concept": "sex", "category": "Moral Discipline and Social Values", "id": "0012_sex"}, {"concept": "human rights", "category": "Social Capital Organizational Membership", "id": "0010_human rights"}, {"concept": "hospital", "category": "Health", "id": "0002_hospital"}, {"concept": "home", "category": "Social Capital Organizational Membership", "id": "0004_home"}, {"concept": "suicide", "category": "Moral Discipline and Social Values", "id": "0013_suicide"}, {"concept": "beauty", "category": "Aesthetics", "id": "0000_beauty"}, {"concept": "police", "category": "Social Capital Organizational Membership", "id": "0008_police"}, {"concept": "race (human categorization)", "category": "Moral Discipline and Social Values", "id": "0002_race (human categorization)"}, {"concept": "funeral", "category": "Religion", "id": "0005_funeral"}, {"concept": "war", "category": "Security", "id": "0000_war"}, {"concept": "heavy drinkers", "category": "Moral Discipline and Social Values", "id": "0005_heavy drinkers"}, {"concept": "pill", "category": "Health", "id": "0004_pill"}, {"concept": "happy", "category": "Personality Characteristics and Emotions", "id": "0001_happy"}, {"concept": "unmarried couples", "category": "Moral Discipline and Social Values", "id": "0006_unmarried couples"}, {"concept": "political party", "category": "Social Capital Organizational Membership", "id": "0007_political party"}, {"concept": "housewife", "category": "Moral Discipline and Social Values", "id": "0008_housewife"}, {"concept": "violence", "category": "Moral Discipline and Social Values", "id": "0014_violence"}, {"concept": "penalty", "category": "Moral Discipline and Social Values", "id": "0015_penalty"}, {"concept": "femininity", "category": "Moral Discipline and Social Values", "id": "0017_femininity"}, {"concept": "father", "category": "Social Capital Organizational Membership", "id": "0001_father"}, {"concept": "drug addiction", "category": "Moral Discipline and Social Values", "id": "0001_drug addiction"}, {"concept": "feminism", "category": "Moral Discipline and Social Values", "id": "0007_feminism"}, {"concept": "unemployment", "category": "Security", "id": "0003_unemployment"}]

var countries = {
    "83C17D8F9074EC4C": "india",
    "7B5285A0AD03F405": "poland",
    "622A3B762504C030": "china",
    "359CEFAA4095485B": "canada",
    "0000000000000000": "none"
}