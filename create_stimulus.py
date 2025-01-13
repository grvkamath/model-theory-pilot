import os
import json
import random

def create_stimulus(data_path, output_path, num_examples=10):
    with open(data_path, 'r') as f:
        data = json.load(f)

    # Create a new file which is list of dicts with the following keys:
    # concept, category, id
    stimuli = []
    for i, (k, v) in enumerate(data.items()):
        for concept in v:
            stimulus = {
                "concept": concept,
                "category": k,
                "id": f"{i:03d}_{concept}"
            }
            stimuli.append(stimulus)
    
    # Shuffle the stimuli
    random.seed(42)
    random.shuffle(stimuli)
    
    # Take the first num_examples
    stimuli = stimuli[:num_examples]
    
    with open(output_path, 'w') as f:
        json.dump(stimuli, f)


if __name__ == "__main__":
    create_stimulus("/Users/bajuka/Desktop/CulturalVQA/CulturalConv/MCA/data/cult_to_text_small.json", "js/stimuli.json", num_examples=10)
