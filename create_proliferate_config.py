import os
import json

countries = {
    "83C17D8F9074EC4C": "india",
    "7B5285A0AD03F405": "poland",
    "622A3B762504C030": "china",
    "359CEFAA4095485B": "canada",
    "0000000000000000": "none"
}

country_to_id = {v: k for k, v in countries.items()}

def create_config(name, completion_url, notes, stimuli_path, country, output_config_path):
    config = {
        "name": name,
        "completion_URL": completion_url,
        "notes": notes
    }

    with open(stimuli_path, 'r') as file:
        stimuli = json.load(file)
        
    conditions = []
    for i, stimulus in enumerate(stimuli):
        stimulus_name = stimulus['id']
        country_id = country_to_id[country]
        experiment_url = f"https://culturalstudy.github.io?param1={country_id}&param2={i}"
        conditions.append({
            "name": stimulus_name,
            "experiment_URL": experiment_url,
            "participants": 3
        })

    config['conditions'] = conditions

    with open(output_config_path, 'w') as file:
        json.dump(config, file, indent=4)

if __name__ == "__main__":
    notes = "ICLR Workshop study for Canada"
    create_config("canada_main_001", "https://app.prolific.com/submissions/complete?cc=CWHUML2T", notes, "js/stimuli.json", "canada", "proliferate_qa/canada_main_001.config")