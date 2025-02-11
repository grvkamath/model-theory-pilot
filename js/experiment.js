function make_slides(f) {
  var slides = {};

  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });

  slides.example = slide({
    name: "example",
    start: function() {
    },
    button: function() {
      exp.go();
    }
  });

  slides.startExp = slide({
    name: "startExp",
    start: function() {
    },
    button: function() {
      exp.go();
    }
  });

  slides.main = slide({
    name: "main",
    index: 0, // Track current stimulus index
    
    start: function() {
      $('.err').hide();
      this.display_stimulus();
    },

    display_stimulus: function() {
      if (this.index < exp.stimuli.length) {
        // Display current stimulus
        let currentStim = exp.stimuli[this.index];
        $("#SentenceA").text(currentStim.SentenceA);
        $("#SentenceB").text(currentStim.SentenceB);
        $("#rationale").val("").attr("placeholder", "Share your rationale: how did you decide on your answer?");
        $("input[name='nli_judgment']").prop("checked", false); // Reset radio buttons
      } else {
        exp.go(); // Move to next slide if stimuli are exhausted
      }
    },

    button: function() {
      const rationale = $("#rationale").val();
      const nli_judgment = $("input[name='nli_judgment']:checked").val();
      $('.err').hide();
      let errors = [];
      
      if (!rationale) {
        errors.push("Please provide an explanation!");
      }
      if (!nli_judgment) {
        errors.push("Please choose an option!");
      }
      
      if (errors.length === 0) {
        this.log_responses();
        this.index++;
        this.display_stimulus();
      } else {
        $('.err').html(errors.join('<br>'));
        $('.err').show();
      }
    },

    log_responses: function() {
      let currentStim = exp.stimuli[this.index];
      exp.data_trials.push({
        "SentenceA": currentStim.SentenceA,
        "SentenceB": currentStim.SentenceB,
        "gold_label": currentStim.gold_label,
        "pavlick_data_index": currentStim.pavlick_data_index,
        "rationale": $("#rationale").val(),
        "nli_judgment": $("input[name='nli_judgment']:checked").val(),
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      });
    }
  });

  slides.add_info = slide({
    name: "add_info",
    submit: function() {
      exp.add_data = {
        comments: $("#comments").val() || "NA"
      };
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "additional_information": exp.add_data
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

function init() {
  exp.trials = [];
  exp.catch_trials = [];
  var stimuli = all_stims;
  var list_index = parseInt(get_url_param("list", 0));
  exp.stimuli = stimuli[list_index]; // Load stimulus sublist
  exp.stimuli = _.shuffle(exp.stimuli); // Shuffle stimuli
  exp.structure = ["i0", "example", "startExp", "main", "add_info"];
  exp.data_trials = [];
  exp.slides = make_slides(exp);
  $('.slide').hide();
  $("#start_button").click(function() { exp.go(); });
  exp.go();
}
